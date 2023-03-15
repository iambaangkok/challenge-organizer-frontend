import ReactMarkdown from 'react-markdown';
import styles from './css/PostModule.module.scss';
import remarkGfm from 'remark-gfm';
import { useEffect, useState } from 'react';
import { PostData } from '../../types/DataType';

interface inputs {
    postData : PostData;
}

export default function PostModule({postData} : inputs) {
    const [time, setTime] = useState<string>('');

    var wrap = require('wordwrap')(92);
    var codeblocks = require('remark-code-blocks');

    const findDiff = () => {
        var postTime = new Date(postData.createdAtDate);
        var currentTime = new Date();

        var diffTime = (currentTime.getTime() - postTime.getTime()) / 1000;

        if (diffTime < 60) {
            setTime('Just now');
        } else if (diffTime < 60 * 60) {
            var diffMin = Math.floor(diffTime / 60);
            if (diffMin == 1) setTime(`${diffMin} minute ago`);
            else setTime(`${diffMin} minutes ago`);
        } else if (diffTime < 60 * 60 * 24) {
            var diffHrs = Math.floor(diffTime / (60 * 60));
            if (diffHrs == 1) setTime(`${diffHrs} hour ago`);
            else setTime(`${diffHrs} hours ago`);
        } else if (diffTime < 60 * 60 * 24 * 30) {
            var diffDay = Math.floor(diffTime / (60 * 60 * 24));
            if (diffDay == 1) setTime(`${diffDay} day ago`);
            else setTime(`${diffDay} days ago`);
        } else if (diffTime < 60 * 60 * 24 * 30 * 12) {
            var diffMns = Math.floor(diffTime / (60 * 60 * 24 * 30));
            if (diffMns == 1) setTime(`${diffMns} month ago`);
            else setTime(`${diffMns} months ago`);
        } else {
            var diffYrs = Math.floor(diffTime / (60 * 60 * 24 * 30 * 12));
            if (diffYrs == 1) setTime(`${diffYrs} year ago`);
            else setTime(`${diffYrs} years ago`);
        }
    };

    useEffect(findDiff, [postData.createdAtDate]);

    return (
        <div className={styles['Post'] + ' ShadowContainer'}>
            <div className={styles['GrayArea']}></div>
            <div className={styles['Content']}>
                <div className="TextDimmedMain S2Regular">
                    Posted by {postData.owner?.displayName} {time}
                </div>
                <div
                    className={
                        styles['MarkdownBody'] + ' TextRegular markdown-body'
                    }
                >
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm, codeblocks]}
                        className="markdown-body"
                    >
                        {wrap(postData.content)}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
}
