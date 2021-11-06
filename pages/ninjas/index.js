import Head from "next/dist/shared/lib/head";
import Link from "next/dist/client/link";
import styles from "../../styles/Ninjas.module.css";

export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    return {
        props: { ninjas: data },
    };
};

const Ninjas = ({ ninjas }) => {
    return (
        <>
            <Head>
                <title>Ninja List | Ninjas</title>
                <meta name="keyword" content="ninjas" />
            </Head>
            <div>
                <h1>All Ninjas</h1>
                {ninjas.map((ninja) => (
                    <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
                        <a className={styles.single}>
                            <h3>{ninja.name}</h3>
                        </a>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Ninjas;
