import { Button, TextField, ThemeProvider } from '@mui/material';
// import Link from 'next/link';
import { useRouter } from 'next/router';
import { SetStateAction, useEffect, useRef, useState } from 'react';
import { ButtonTheme } from '../../theme/Button';
import styles from './css/PostEditor.module.scss';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios';

interface inputs {
    tabName: string | undefined;
}

export default function PostEditor({ tabName }: inputs) {
    const [text, setText] = useState('');
    const [displayName, setDisplayName] = useState<string>('');

    useEffect(() => {
        var name = localStorage.getItem('displayName');
        if (name === null) setDisplayName('Not Found');
        else setDisplayName(name);
    }, []);

    const handleTextInputChange = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        setText(event.target.value);
    };

    const router = useRouter();
    const { challengeTitle } = router.query;

    const previewMarkdown = () => {
        localStorage.setItem('markdown', text);
        window.open('/preview', '_blank');
    };

    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    const createPost = () => {
        if (text.length !== 0) {
            axios
                .post(`${BASE_URL}/posts/`, {
                    displayName: displayName,
                    challengeTitle: challengeTitle,
                    tabName: tabName,
                    content: text,
                })
                .then((resp) => {})
                .catch((e) => console.log(e))
                .finally(() => {
                    setText('');
                });
        }
    };

    const clearTextField = () => {
        setText('');
        localStorage.removeItem('markdown');
    };

    return (
        <div className={styles['Post'] + ' ShadowContainer'}>
            <div className={styles['Editor']}>
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    // defaultValue="Default Value"
                    value={text}
                    onChange={handleTextInputChange}
                    label="What do you want to post?"
                    helperText="* Markdown supported"
                    fullWidth
                />
            </div>
            <div className={styles['Button']}>
                <ThemeProvider theme={ButtonTheme}>
                    <div>
                        <Button
                            variant="contained"
                            size="small"
                            color="error"
                            onClick={clearTextField}
                            startIcon={<DeleteForeverIcon />}
                        >
                            Clear
                        </Button>
                    </div>
                    <div className={styles['Left']}>
                        <Button
                            variant="contained"
                            size="small"
                            color="secondary"
                            onClick={previewMarkdown}
                            startIcon={<VisibilityIcon />}
                        >
                            Preview Markdown
                        </Button>

                        <Button
                            variant="contained"
                            size="small"
                            onClick={createPost}
                        >
                            Post
                        </Button>
                    </div>
                </ThemeProvider>
            </div>
        </div>
    );
}
