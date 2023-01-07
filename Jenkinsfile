pipeline {
    agent any

    stages {
        // stage('checkout'){
        //     steps {
        //         checkout scmGit(branches: [[name: '*']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/iambaangkok/challenge-organizer-frontend.git']])
        //     }
        // }
        stage('build') {
            // when{
            //     not{
            //         branch 'master'
            //     }
            // }
            steps {
                bat 'npm install'
                bat 'npm run build'
            }
        }
        stage('test') {
            // when{
            //     not{
            //         branch 'master'
            //     }
            // }
            steps {
                bat 'npx playwright install'
                bat 'npx playwright test --reporter=list > playwright-report/report.txt'
                emailext attachLog: true, mimeType: 'text/html', attachmentsPattern: 'playwright-report/report.txt', body: '${FILE, path="playwright-report/report.txt"}', recipientProviders: [previous(), brokenBuildSuspects(), brokenTestsSuspects()], subject: '$PROJECT_NAME - Build # $BUILD_NUMBER - $BUILD_STATUS!'
                // emailext attachLog: true, mimeType: 'text/html', attachmentsPattern: 'playwright-report/index.html', body: '${FILE, path="playwright-report/index.html"}', recipientProviders: [previous(), brokenBuildSuspects(), brokenTestsSuspects()], subject: '$PROJECT_NAME - Build # $BUILD_NUMBER - $BUILD_STATUS!',  to: 'pawaret_d@cmu.ac.th'
                // emailext attachLog: true, attachmentsPattern: 'playwright-report/index.html', body: '', recipientProviders: [previous(), brokenBuildSuspects(), brokenTestsSuspects()], subject: '$PROJECT_NAME - Build # $BUILD_NUMBER - $BUILD_STATUS!'
                // emailext attachLog: true, body: '', recipientProviders: [previous(), brokenBuildSuspects(), brokenTestsSuspects()], subject: '$PROJECT_NAME - Build # $BUILD_NUMBER - $BUILD_STATUS!'
                // emailext body: 'Test report: ${FILE,path="playwright-report/index.html"}', recipientProviders: [previous(), brokenBuildSuspects(), brokenTestsSuspects()], subject: 'Challenge Organizer - Jenkins Test Report'
            }
        }
    }
    // post {
    //     always{
            
    //     }
    // }
}