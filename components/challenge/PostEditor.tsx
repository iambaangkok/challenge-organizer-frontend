import { CropLandscapeOutlined } from '@mui/icons-material';
import { Button, TextField, ThemeProvider } from '@mui/material';
// import Link from 'next/link';
import { useRouter } from 'next/router';
import { SetStateAction, useRef, useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { ButtonTheme } from '../../theme/Button';
import styles from './css/PostEditor.module.scss';

export default function PostEditor() {
    const [text, setText] = useState('');

    const handleTextInputChange = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        setText(event.target.value);
    };

    const router = useRouter()
    
    const previewMarkdown = () => {
        // router.push({
        //     pathname: '/preview',
        //     query: { markdown: text }
        // })
        // navigate('/preview')
    }

    const showTextField = () => {
        console.log(text);
        setText('');
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
                    label="Enter your post markdown here"
                    fullWidth
                />
            </div>
            <div className={styles['Button']}>
                <ThemeProvider theme={ButtonTheme}>
                    {/* <Link
                        href= {{
                            pathname: '/preview',
                            query : {
                                markdown : text
                            }
                        }}
                    > */}
                        <Button
                            variant="contained"
                            size="medium"
                            color="secondary"
                            // onClick = {previewMarkdown}
                        >
                            Preview Markdown
                        </Button>
                    {/* </Link> */}

                    <Button
                        variant="contained"
                        size="medium"
                        onClick={showTextField}
                    >
                        Create Post
                    </Button>
                </ThemeProvider>
            </div>
        </div>
    );
}
