import React, { memo } from 'react'
import PropTypes from 'prop-types';
import {RecommendThemeHeaderWrapper} from './style'
function RecommendThemeHeader(props) {
    const {title, keyword} = props
    return (
        <RecommendThemeHeaderWrapper>
            <div className="left">
                <i></i>
                <div className="title">{title}</div>
                <ul>
                    {
                        keyword.map((item, index) => {
                            return (
                                <li key={index}>
                                    <span>{item}</span>
                                    <span className="line">|</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="right">
                <span>更多</span>
                <i></i>
            </div>
        </RecommendThemeHeaderWrapper>
    )
}
RecommendThemeHeader.propTypes= {
    title: PropTypes.string.isRequired,
    keyword: PropTypes.array
}
RecommendThemeHeader.defaultProps = {
    keyword: []
}
export default memo(RecommendThemeHeader)
