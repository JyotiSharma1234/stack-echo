import React from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Modal, List } from 'antd';
import 'antd/dist/antd.css';
import { QuestionCircleOutlined, RightCircleTwoTone } from '@ant-design/icons';
import './customCss/header.css';

const Header = ({ siteTitle }) => {
    function info() {
        let data = ['Random numbers(1-4) will be shown on the screen one at a time.',
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
                marginBottom: `1.45rem`,
            }}>
                <div
                    style={{
                        margin: `0 auto`,
                        padding: `1.45rem 1.0875rem`,
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                    <h1 className="heading-name">
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

                </div>
            </header>
            <div className="help"><QuestionCircleOutlined className="help-icon" onClick={info}/></div>
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
