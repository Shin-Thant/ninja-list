import Head from "next/dist/shared/lib/head";
import styles from "../styles/Home.module.css";
import Link from "next/dist/client/link";

function Home() {
    return (
        <>
            <Head>
                <title>Ninja List | Home</title>
                <meta name="keyword" content="ninjas" />
            </Head>
            <div>
                <h1 className={styles.title}>Home Page</h1>
                <p className={styles.text}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                </p>
                <p className={styles.text}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                </p>
                <Link href="/ninjas">
                    <a className={styles.btn}>See Ninja Listing</a>
                </Link>
            </div>
        </>
    );
}

export default Home;
