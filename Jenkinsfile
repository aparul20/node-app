pipeline {
  environment {
    registry = "mydocker2008/nodejs-helloworld-2:secondtry"
    registryCredential = credentials('dockerhub')
  }
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
			withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'NUSER', passwordVariable: 'NPASS')]) {	
				bat 'docker login -u mydocker2008 -p lum1n0us2008 docker.io'
			}
			
			bat 'docker build -t mydocker2008/nodejs-helloworld-2:secondtry .'
			bat 'docker push mydocker2008/nodejs-helloworld-2:secondtry'

		}
	}
	
  }
}