import ReactMarkdown from 'react-markdown'
import styles from './css/PostModule.module.scss'
import remarkGfm from 'remark-gfm'

interface post {
    data: {
        author: {
            displayName: string,
            isHost: boolean,
        },
        contentMarkdown: string | null
    }
}

export default function PostModule(postData: post) {
    var wrap = require('wordwrap')(80, { mode: "hard" })
    var codeblocks = require('remark-code-blocks')

    // console.log(wrap(postData.data.contentMarkdown))

    return (
        <div className={styles['Post'] + ' ShadowContainer'}>
            <div className={styles['GrayArea']}></div>
            <div className={styles['Content']}>
                <div className='TextDimmedMain'>
                    Posted by {postData.data.author.displayName} {3} days ago
                </div>
                <div className={styles['MarkdownBody'] + ' markdown-body'}>
                    <ReactMarkdown remarkPlugins={[remarkGfm, codeblocks]} className='markdown-body'>
                        {wrap(postData.data.contentMarkdown)}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    )
}