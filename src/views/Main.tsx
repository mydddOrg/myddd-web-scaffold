import * as React from "react"
import styles from 'style/Main.module.less'
import Header from "./common/Header"
import Button from '@material-ui/core/Button'
import GroupIcon from '@material-ui/icons/Group';
import { useHistory } from 'react-router';
import { Helmet } from "react-helmet"

const Main = () => {
    let history = useHistory()

    const toTaoofcodeSite = () => {
        const newWindow = window.open('https://taoofcode.cc', '_blank', 'noopener,noreferrer')
    }

    return (<div className={styles.root}>

        <Helmet>
            <meta charSet="utf-8" />
            <title>微言码道</title>
        </Helmet>

        <Header title="myddd-web" />

        <div className={styles.main}>

            <div className={styles.logo}>
            </div>

            <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    className={styles.button}
                    startIcon={<GroupIcon />}
                    onClick={toTaoofcodeSite}
                >
                    访问官网
            </Button>

        </div>

    </div>)
}

export default Main