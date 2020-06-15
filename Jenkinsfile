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
	
	stage('Create Docker Image') {
	  steps {
		bat 'docker build -t aparul20/node-app .'
		bat 'docker push mydocker2008/nodejs-helloworld-2:secondtry'
	  }
	}
	
  }
}