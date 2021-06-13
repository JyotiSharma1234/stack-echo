import React from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Modal, List } from 'antd';
import 'antd/dist/antd.css';
import { QuestionCircleOutlined, RightCircleTwoTone } from '@ant-design/icons';
import './customCss/header.css';

const Header = ({ siteTitle }) => {
    function info() {
        let data = ['Random numbers( 0-9 ) will be shown on the screen one at a time.',
                    'Memorise the sequence of the number generated from the beginning of the game.',
                    'Click the numbers in the sequence right from the first number.'
                ]
    Modal.info({
        title: 'How to Play?',
        content: (
            <div>
                <List
                size="small"
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                        avatar={<RightCircleTwoTone className="list-icon" twoToneColor="rgb(32, 230, 183)"/>}
                        title={item}
                        />
                    </List.Item>
                    )}
                />,
            </div>
        ),
        onOk() {},
        });
    }

    return (
        <>
            <header
            style={{
                background: `#20e6b7`,
                marginBottom: `1.45rem`,
            }}>
                <div
                    style={{
                        margin: `0 auto`,
                        maxWidth: 960,
                        padding: `1.45rem 1.0875rem`,
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                    <h1 style={{ margin: 0 }}>
                        <Link
                        to="/"
                        style={{
                            color: `white`,
                            textDecoration: `none`,
                        }}
                        >
                        {siteTitle}
                        </Link>
                    </h1>

                    <QuestionCircleOutlined className="help-icon" onClick={info}/>
                </div>
            </header>
      </>
    )
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
