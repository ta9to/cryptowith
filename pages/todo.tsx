import Layout from "../components/layout";
import Container from '../components/container'
import Head from "next/head";

export default function Todo() {
    return (
        <Layout>
            <Head>
                <title>Todo</title>
            </Head>
            <Container>
                <p>todo</p>
            </Container>
        </Layout>
    )
}
