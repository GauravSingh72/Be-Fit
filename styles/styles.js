import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9'
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333'
  },
  subHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#444'
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10, 
    backgroundColor: '#fff',
    fontSize: 14
  },
  button: {
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3, 
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  logContainer: {
    flex: 1,
    width: '100%',
    padding: 20 
  },
  logItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12, 
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    elevation: 2, 
  },
  tabContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: 'space-between', 
    elevation: 2, 
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabIcon: {
    fontSize: 26, 
    color: '#007bff'
  },
  tabLabel: {
    fontSize: 14, 
    color: '#007bff',
    marginTop: 8,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007bff'
  },
  inactiveTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'transparent'
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 16, 
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 2,
  },
  flexEnd: {
    justifyContent: 'flex-end'
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonGap: {
    width: 16,
  },
  workoutBtn: {
    marginVertical: 10
  },
  progressContainer: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
  },
  progressBar: {
    marginTop: 12,
    height: 8,
    borderRadius: 5,
    backgroundColor: '#eee',
  },
  ProgressContainer: {
    padding: 20
  },
  goalCompletedText: {
    color: 'green',
    fontWeight: 'bold'
  },
  progressBtn: {
    marginVertical: 10
  }
})

export default styles
