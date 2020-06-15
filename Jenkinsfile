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

	stage('Build Image') {
		
		steps {
			withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'NUSER', passwordVariable: 'NPASS')]) {	
				bat 'docker login -u mydocker2008 -p lum1n0us2008 docker.io'
			}
			
			script {
				dockerImage = docker.build registry 
				docker.withRegistry( '', registryCredential ) {
					dockerImage.push()
				}
			}
		}
	}
	
  }
}