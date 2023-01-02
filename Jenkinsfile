// CODE_CHANGES = getGitChanges()

pipeline {
    agent any
    //    agent { docker { image 'mcr.microsoft.com/playwright:v1.29.0-focal' } }

    // environment {
    //     // NEW_VERSION = '1.3.0'
    //     // SERVER_CREDENTIALS = credentials('')
    // }

    stages {
        stage('build') {
            // when {
            //     expression {
            //         // BRANCH_NAME == 'dev' && CODE_CHANGES == true
            //     }
            // }
            steps {
                bash 'npm install'
                bash 'npm run build'
            }
        }
        stage('test') {
            steps {
                // Depends on your language / test framework
                bash 'npm install -D @playwright/test'
                bash 'npx playwright install'
                bash 'npx playwright test --list'
            }
        }

        // stage('deploy') {
        //     steps {
        //     }
        // }
    }
    // post {
    //     always {
    //     }

    //     failure {
    //     }

    //     success {
    //     }
    // }
}
