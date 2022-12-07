function PersonComponent (props) {
    console.log(props)
    return (
    <input style={{...styles.input, borderWidth: props.width}} />
    )
} 

export default PersonComponent;

const styles = {
  input : {
    borderWidth:1,
    borderColor:'red',
    borderStyle:'solid',
    width:'95%',
    height:35,
    borderRadius:5,
    backgroundColor:'#F3F9FA',
    backgroundImage:'url(./person.svg)',
    backgroundRepeat:'no-repeat',
    backgroundPosition: 'right 51vh top 3vh',
    padding:10,
    fontFamily: 'Space Mono',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 24,
    lineHeight: 36,
    textAlign: 'right',
    color: '#00474B',
    marginBottom:30,

    }
}