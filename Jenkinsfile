pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/itsmeharipriya/E-commerce-site-Testing-Playwright-JS-'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                bat 'npx playwright install'
            }
        }

        stage('Run Tests in Parallel') {
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

        stage('Post Cleanup') {
            steps {
                echo 'Tests completed!'
            }
        }
    }
}