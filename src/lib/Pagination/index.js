import React from 'react';
import styled from 'styled-jss';
import propTypes from 'prop-types';
import Icon from '../Icon'

const ICON_MAP = {
    NEXT: 'fa-angle-right',
    PREVIOUS: 'fa-angle-left',
    TOP: 'fa-angle-double-left',
    END: 'fa-angle-double-right'
}

const getPadding = theme => {
    return `${theme.getSpacing(1)}px ${theme.getSpacing(2)}px`;
}

const getBorder = (theme, active) => {
    return `1px solid ${active ? theme.colors.primary : theme.colors.grey1}`;
}

const getIconColor = (accessible, theme) => {
    return accessible ? theme.colors.primary : theme.colors.grey2;
}

const PageNumber = styled('span')({
    border: ({ theme, active }) => getBorder(theme, active),
    padding: ({ theme }) => getPadding(theme),
    borderRadius: ({ theme }) => theme.radius,
    marginRight: ({ theme }) => theme.getSpacing(1),
    color: ({ theme, active }) => active ? theme.colors.primary : theme.colors.grey2,

});

const StyledIcon = styled(Icon)({
    color: ({ theme, accessible }) => getIconColor(accessible, theme),
    marginRight: ({ theme }) => theme.getSpacing(1),
})

const PagesBox = styled('div')({
    display: 'inline-flex',
})

const PaginationBox = styled('div')({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',

});

const Pages = ({ current, pages, handlePageChange }) => {
    return (
        <PagesBox>
            {pages.map((page, index) => {
                const isActive = current === page;
                return <PageNumber key={`page_${index}`} active={isActive} onClick={handlePageChange(page)}>{page}</PageNumber>
            })}
        </PagesBox>
    )
}

const getPages = (total, size) => {
    let numbers = [];
    const pages = (total / size).toFixed(0);

    for (let i = 0; i < pages; i++) {
        numbers.push(i + 1);
    }

    return numbers;
}

const pageChange = (onPageChange) => page => () => {
    onPageChange(page);
}

const Pagination = ({ current, total, size, onPageChange, ...props }) => {
    const pages = getPages(total, size);

    const handlePageChange = pageChange(onPageChange);

    return (
        <PaginationBox {...props}>
            <StyledIcon icon={ICON_MAP.TOP} accessible={current !== 1} onClick={handlePageChange(1)} />
            <StyledIcon icon={ICON_MAP.PREVIOUS} accessible={current !== 1} onClick={handlePageChange(current - 1)} />
            <Pages current={current} pages={pages} handlePageChange={handlePageChange} />
            <StyledIcon icon={ICON_MAP.NEXT} accessible={current !== pages.length} onClick={handlePageChange(pages.length + 1)} />
            <StyledIcon icon={ICON_MAP.END} accessible={current !== pages.length} onClick={handlePageChange(pages.length)} />
        </PaginationBox>
    )
}

Pagination.propTypes = {
    /** 當前頁數 */
    current: propTypes.number,
    /** 總頁數 */
    total: propTypes.number,
    /** 每頁筆數 */
    size: propTypes.number,
    /** 頁面變換事件 */
    onPageChange: propTypes.func,
}

Pagination.defaultProps = {
    current: 1,
    total: 1,
    size: 10,
    onPageChange: () => false,
}

export default Pagination;