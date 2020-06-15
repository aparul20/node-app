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
			withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'NUSER', passwordVariable: 'NPASS')]) {	
					bat 'echo $registryCredential '
			}
		}
	}
	
  }
}