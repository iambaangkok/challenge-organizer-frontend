import Button from '@mui/material/Button';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import styles from './css/index.module.scss';

export default function Submit() {
    const router = useRouter();

    const { taskId, taskName } = router.query;
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    const [displayName, setDisplayName] = useState<string>('');
    const [file, setFile] = useState<File | null>(null);

    const handleSubmit = () => {
        Swal.fire({
            title: 'Do you want to send submission?',
            showDenyButton: true,
            // showCancelButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: 'No',
            // customClass: {
            //   actions: 'my-actions',
            //   cancelButton: 'order-1 right-gap',
            //   confirmButton: 'order-2',
            //   denyButton: 'order-3',
            // }
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Submission Sent', '', 'success');

                axios
                    .post(`${BASE_URL}/submissions/createSubmission`, {
                        displayName: displayName,
                        taskId: taskId,
                    })
                    .then((resp) => {
                        if (file) {
                            let formData = new FormData();
                            formData.append('file', file);

                            // const createFileDetail = {
                            //     type: file.type,
                            //     path: file.;
                            //     displayName: string;
                            //     challengeTitle: string;
                            //     submissionId: number;
                            //     itemId: number;

                            //     type: 'image',
                            //     displayName: file.name,
                            //     challengeTitle: challengeTitle,
                            const submissionId =
                                resp.data.submissionId.toString();
                            // };
                            // formData.append('type', 'image');
                            // formData.append('displayName', file.name);
                            // formData.append('challengeTitle', challengeTitle ? challengeTitle?.toString() : '');
                            // formData.append('submissionId', resp.data.submissionId.toString());

                            axios
                                .post(
                                    `http://localhost:3030/api/submissions/${submissionId}/uploadfile`,
                                    formData,
                                )
                                .then((response) => {
                                    console.log(response.data);
                                })
                                .catch((error) => {
                                    console.error(error);
                                });
                        }
                    })
                    .catch((e) => console.log(e));
            } else if (result.isDenied) {
            }
        });
    };

    const handleClear = () => {
        setFile(null);
    };

    const handleUploadImage = (e: any) => {
        setFile(e.target.files[0]);
    };

    useEffect(() => {
        if (localStorage.getItem('displayName') !== null) {
            setDisplayName(`${localStorage.getItem('displayName')}`);
        } else {
            setDisplayName(``);
        }
    }, []);

    return (
        <div className={styles['Body'] + ' TextRegular'}>
            <div className={styles['Submit'] + ' ShadowContainer'}>
                <div>Submit Task: {taskName}</div>
                <div>
                    <input
                        accept="*"
                        multiple
                        type="file"
                        onChange={handleUploadImage}
                    />

                    <Button onClick={handleSubmit}>Accept</Button>
                    <Button onClick={handleClear}>Clear</Button>
                </div>
            </div>
        </div>
    );
}
