pipeline {
  environment {
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
		
			bat 'docker login -u %registryCredential_USR% -p %registryCredential_PSW% docker.io'
			bat 'docker build -t mydocker2008/nodejs-helloworld-2:secondtry .'
			bat 'docker push mydocker2008/nodejs-helloworld-2:secondtry'

		}
	}
	
  }
}
