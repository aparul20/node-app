pipeline {
  environment {
    registry = "mydocker2008/nodejs-helloworld-2:secondtry"
    registryCredential = credentials('dockerhub')
  }
  agent any
    
  tools {nodejs "Node-Build"}
    
  stages {


	stage('Build Image') {
		
		steps {	
					bat 'docker login -u %registryCredential_USR% -p %registryCredential_PSW% docker.io'
		}
	}
	
  }
}