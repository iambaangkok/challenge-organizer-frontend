pipeline {
    agent any

    // environment {
    //     // NEW_VERSION = '1.3.0'
    //     // SERVER_CREDENTIALS = credentials('')
    // }

    stages {
        stage('build') {
            steps {
                bat 'npm install'
                bat 'npm run build'
            }
        }
        stage('build docker image') {
            steps {
                bat 'docker build -t iambaangkok/challenge-organizer-frontend .'
            }
        }
        stage('run docker image') {
            steps {
                // bat 'docker pull iambaangkok/challenge-organizer-frontend'
                bat 'docker rm -f challenge-organizer-frontend'
                bat 'docker run -dp 3000:3000 --name challenge-organizer-frontend iambaangkok/challenge-organizer-frontend'
                // bat 'docker compose up'
            }
        }
        stage('test') {
            steps {
                bat 'npx playwright install'
                bat 'npx playwright test'
                bat 'npx playwright test --reporter=list > playwright-report/report.txt'
                emailext attachLog: true, mimeType: 'text/html', attachmentsPattern: 'playwright-report/report.txt', body: '${FILE, path="playwright-report/report.txt"}', recipientProviders: [previous(), brokenBuildSuspects(), brokenTestsSuspects()], subject: '$PROJECT_NAME - Build # $BUILD_NUMBER - $BUILD_STATUS!'
            }
        }
        stage('push image to docker hub') {
            when{
                branch 'master'
            }
            steps {
                withCredentials([usernamePassword(credentialsId: 'dff12934-5025-4c8d-a205-7ecab8123f22', passwordVariable: 'jenkins-docker-password', usernameVariable: 'jenkins-docker-username')]) {
                    bat 'docker login -u iambaangkok -p %jenkins-docker-password%'
                    bat 'docker push iambaangkok/challenge-organizer-frontend'
                }
            }
        }


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