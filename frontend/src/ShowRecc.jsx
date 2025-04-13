import styles from "./Recommendations.module.css";

function ShowRecc(props){
    return <div className={styles.show_recc_container}>
    <br />
        <center ><h1 className={styles.show_recc}>The Recommended {props.thing} is: {props.getFert}</h1></center>
        <br />
</div>
}

export default ShowRecc;