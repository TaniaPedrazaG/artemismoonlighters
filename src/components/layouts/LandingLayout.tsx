import Head from "next/head"
import { FC, PropsWithChildren } from "react";
import { Tooltip, IconButton } from "@mui/material";
import styles from './LandingLayout.module.css'
import { Navbar } from "../ui";
import { SmartToy } from "@mui/icons-material";

interface Props extends PropsWithChildren {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
}

export const LandingLayout: FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        {
          imageFullUrl && (
            <meta name="og:image" content={imageFullUrl} />
          )
        }
      </Head>
      <nav>
        <Navbar/>
      </nav>
      <main 
        style={{
          margin: '56px 0px',
        }}
      >
        {children}
        <div
          style={{ position: 'fixed', bottom: '40px', right: '40px' }}
        >
          <Tooltip title={'Moonlight Chat'}>
            <IconButton size="large" className={styles['floating-button']}>
              <SmartToy />
            </IconButton>
          </Tooltip>
        </div>
      </main>
    </>
  )
}
