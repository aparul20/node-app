pipeline {
  agent any
    
  tools {nodejs "Node-Build"}
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/aparul20/node-app'
      }
    }
        
    stage('Install dependencies') {
      steps {
        bat 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         bat 'npm test'
      }
    }      
  }
}