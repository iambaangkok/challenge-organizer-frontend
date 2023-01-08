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
                script {
                    try{
                        bat 'npx playwright install'
                        bat 'if not exist "playwright-report" mkdir playwright-report'
                        bat 'npx playwright test > playwright-report/report.txt'                            
                        test_ok = true
                        emailext attachLog: true, mimeType: 'text/html', attachmentsPattern: 'playwright-report/index.html, playwright-report/report.txt', body: 'All tests passed.', recipientProviders: [previous(), brokenBuildSuspects(), brokenTestsSuspects()], subject: '$PROJECT_NAME - Build # $BUILD_NUMBER - $BUILD_STATUS!'
                        // emailext attachLog: true, mimeType: 'text/html', attachmentsPattern: 'playwright-report/report.txt', body: '${FILE, path="playwright-report/report.txt"}', recipientProviders: [previous(), brokenBuildSuspects(), brokenTestsSuspects()], subject: '$PROJECT_NAME - Build # $BUILD_NUMBER - $BUILD_STATUS!'
                    }catch(e) {
                        test_ok = false
                        echo e.toString()  
                        emailext attachLog: true, mimeType: 'text/html', attachmentsPattern: 'playwright-report/index.html, playwright-report/report.txt', body: 'See attached report for failed test(s).', recipientProviders: [previous(), brokenBuildSuspects(), brokenTestsSuspects()], subject: '$PROJECT_NAME - Build # $BUILD_NUMBER - $BUILD_STATUS!'
                        // emailext attachLog: true, mimeType: 'text/html', attachmentsPattern: 'playwright-report/report.txt', body: '${FILE, path="playwright-report/report.txt"}', recipientProviders: [previous(), brokenBuildSuspects(), brokenTestsSuspects()], subject: '$PROJECT_NAME - Build # $BUILD_NUMBER - $BUILD_STATUS!'
                        error "Test Failed"
                    }
                }
            }
        }
        stage('build docker image') {
            steps {
                bat 'docker build -t iambaangkok/challenge-organizer-frontend .'
            }
        }
        stage('push image to docker hub') {
            when{
                branch 'master'
            }
            steps {
                script {
                    if (test_ok) {
                        withCredentials([usernamePassword(credentialsId: 'dff12934-5025-4c8d-a205-7ecab8123f22', passwordVariable: 'jenkins-docker-password', usernameVariable: 'jenkins-docker-username')]) {
                            bat 'docker login -u iambaangkok -p %jenkins-docker-password%'
                            bat 'docker push iambaangkok/challenge-organizer-frontend'
                        }
                    }else{
                        
                    }
                }
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