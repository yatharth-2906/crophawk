import styles from "./Recommendations.module.css";

function ShowRecc(props){
    const type = props.type || "Recommended";
    return <div className={styles.show_recc_container}>
    <br />
        <center ><h1 className={styles.show_recc}>The {type} {props.thing} is: {props.getFert}</h1></center>
        <br />
</div>
}

export default ShowRecc;