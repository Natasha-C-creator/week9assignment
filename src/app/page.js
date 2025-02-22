//HOMEPAGE
import Image from "next/image";
import Head from "next/head";
import PopOver from "@/components/PopOver";
import Link from "next/link";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    flexDirection: "column",
  },
  imageWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    maxWidth: "1200px",
  },

  imageContainer: {
    textAlign: "center",
    width: "300px",
  },

  imageText: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#333",
  },
};

export const metadata = {
  title: "Homepage",
  description: "A simple blog built with Next.js",
};

export default function HomePage() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <PopOver />
      <div style={styles.container}>
        <div style={styles.imageWrapper}>
          <div style={styles.imageContainer}>
            <Link href="/posts">
              <Image
                src="/cheesecake.jpg"
                alt="Vanilla cheesecake with blueberry sauce"
                width={300}
                height={300}
                priority="false"
              />
            </Link>
            <a style={styles.imageText}>
              Recipe for the best cheesecake you will ever taste
            </a>
          </div>
          <div style={styles.imageContainer}>
            <Link href="/posts">
              <Image
                src="/mountains.jpg"
                alt="Long straight road surrounded by mountains"
                width={300}
                height={300}
                priority="false"
              />
            </Link>
            <p style={styles.imageText}>
              5 road trips that will make you want to take a gap year
            </p>
          </div>
          <div style={styles.imageContainer}>
            <Link href="/posts">
              <Image
                src="/tapas.jpg"
                alt="Tapas on a table"
                width={300}
                height={300}
                priority="false"
              />
            </Link>
            <p style={styles.imageText}>Next Stop: San Sebastian for Tapas</p>
          </div>
        </div>
      </div>
    </>
  );
}
