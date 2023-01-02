CODE_CHANGES = getGitChanges()

pipeline {
    agent any
    //    agent { docker { image 'mcr.microsoft.com/playwright:v1.29.0-focal' } }

    environment {
        // NEW_VERSION = '1.3.0'
        SERVER_CREDENTIALS = credentials('')
    }

    stages {
        stage('build') {
            when {
                expression {
                    // BRANCH_NAME == 'dev' && CODE_CHANGES == true
                }
            }
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('test') {
            steps {
                // Depends on your language / test framework
                sh 'npm install'
                sh 'npx playwright test'
            }
        }

        stage('deploy') {
            steps {
            }
        }
    }
    post {
        always {
        }

        failure {
        }

        success {
        }
    }
}
