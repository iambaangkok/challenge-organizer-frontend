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
        stage('test') {
            steps {
                bat 'npx playwright install'
                bat 'npx playwright test --list'
            }
        }

        stage('build docker image') {
            steps {
                bat 'docker build -t iambaangkok/challenge-organizer-frontend .'
            }
        }

        stage('push image to docker hub') {
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