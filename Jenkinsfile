pipeline {
    agent any  // can also use 'windows' or a specific agent label
    environment {
        NODE_HOME = 'C:\\Program Files\\nodejs'  // Node installation path on agent
        PATH = "${env.NODE_HOME};${env.PATH}"
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/itsmeharipriya/Banking-project-BDD-frame-work'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                bat 'npx playwright install'  // installs browsers
            }
        }
        stage('Run Tests') {
            parallel {
                stage('Chromium') {
                    steps {
                        bat 'npx playwright test --project=chromium'
                    }
                }
                stage('Firefox') {
                    steps {
                        bat 'npx playwright test --project=firefox'
                    }
                }
                stage('Webkit') {
                    steps {
                        bat 'npx playwright test --project=webkit'
                    }
                }
            }
        }
        stage('Publish Report') {
            steps {
                publishHTML(target: [
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright HTML Report'
                ])
            }
        }
    }
    post {
        always {
            echo 'Cleaning workspace...'
            cleanWs()
        }
    }
}