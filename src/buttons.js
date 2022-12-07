function Buttons(props){
    console.log(props)
    return <button style={{...styles.button}}>5%</button>
}
   

export default Buttons;

const styles = {
   button: {
    width:117,
  height:48,
  backgroundColor:'#00474B',
  border: 'none',
  fontFamily: 'Space Mono',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: 24,
  lineHeight: 36,
  textAlign: 'center',
  color: '#FFFFFF',
  borderRadius:5,
  cursor:'pointer',
  }
}