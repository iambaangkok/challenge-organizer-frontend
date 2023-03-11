import { CropLandscapeOutlined } from '@mui/icons-material';
import { Button, TextField, ThemeProvider } from '@mui/material';
// import Link from 'next/link';
import { useRouter } from 'next/router';
import { SetStateAction, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ButtonTheme } from '../../theme/Button';
import styles from './css/PostEditor.module.scss';

export default function PostEditor() {
    const [text, setText] = useState('');

    const handleTextInputChange = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        setText(event.target.value);
    };

    const router = useRouter();

    const previewMarkdown = () => {
        localStorage.setItem('markdown', text);
        window.open('/preview', '_blank');
    };

    const createPost = () => {
        // axios.post('/api/posts/')
        setText('');
    };

    const clearTextField = () => {
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
                    label="Create post! Your participants need information."
                    helperText="* Markdown supported"
                    fullWidth
                />
            </div>
            <div className={styles['Button']}>
                <ThemeProvider theme={ButtonTheme}>
                    <div>
                        <Button
                            variant="contained"
                            size="medium"
                            color="secondary"
                            onClick={clearTextField}
                        >
                            Clear
                        </Button>
                    </div>
                    <div className = {styles['Left']}>
                        <Button
                            variant="contained"
                            size="medium"
                            color="secondary"
                            onClick={previewMarkdown}
                        >
                            Preview Markdown
                        </Button>

                        <Button
                            variant="contained"
                            size="medium"
                            onClick={createPost}
                        >
                            Create Post
                        </Button>
                    </div>
                </ThemeProvider>
            </div>
        </div>
    );
}
