import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Heading } from "@chakra-ui/react";
import Repo from "../components/Repo/Repo";
import Link from "next/link";

// interface ProfileProps{
//   avatar_url:string,
//   login:string,
//   name:string,
//   bio:string
// }

export default function Home({ profile, repo }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.bio}>
              <Image
                src={profile.avatar_url}
                width={200}
                height={200}
                alt={profile.login}
              ></Image>
              <Heading size={"lg"}>{profile.name}</Heading>
              <p>@{profile.login}</p>
              <div>{profile.bio}</div>
              <div className={styles.btn}>
                <div>Resume</div>
                <div>Follow</div>
              </div>
            </div>
            <div className={styles.skills}>
              <div>TYPESCRIPT</div>
              <div>REACT.JS</div>
              <div>MONGODB</div>
              <div>POSTGRESQL</div>
              <div>DENO</div>
              <div>MONGODB</div>
              <div>NODE.JS</div>
              <div>DENO</div>
              <div>POSTGRESQL</div>
              <div>GIT</div>
              <div>GIT</div>
            </div>

            <div className={styles.edu}>
              <div>
                <div className={styles.current}>1</div>
                <div>
                  <h2>Trainee at Masai School</h2>
                  <p>October 2021 - Present</p>
                </div>
              </div>

              <div>
                <div>2</div>
                <div>
                  <h2>Trainee at Masai School</h2>
                  <p>October 2021 - Present</p>
                </div>
              </div>

              <div>
                <div>3</div>
                <div>
                  <h2>Trainee at Masai School</h2>
                  <p>October 2021 - Present</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <Heading>Projects</Heading>
            <div className={styles.repogrid}>
              {repo.items &&
                repo.items.map((elm) => {
                  return (
                    <Link key={elm.id} href={elm.git_url}>
                      <Repo key={elm.id} {...elm} />
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res1 = await fetch(`https://api.github.com/users/khan4527`);
  const profile = await res1.json();

  const res2 = await fetch(
    `https://api.github.com/search/repositories?q=user:khan4527+fork:true&sort=updated&per_page=10&type=Repositories`
  );
  const repo = await res2.json();

  return {
    props: {
      profile,
      repo,
    },
  };
}
