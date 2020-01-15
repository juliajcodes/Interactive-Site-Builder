/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
    BuildChildCont,
    SplitDiv,
    ChildDiv,
    NavDiv,
    NavDivCont,
    ImageText,
    TriDiv,
    CtaDiv,
    FooterDiv
} from '../Editor/styles';
import { SettingsButton, SettingsPopup, Edit, Delete } from './styles';

class BuildChild extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: false };
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    handleClick = e => {
        if (this.node && this.node.contains(e.target)) {
            return;
        }
        this.setState({ active: false });
    };

    resetState = () => {
        this.setState({ active: false });
    };

    render() {
        const { name, handleRemoveBuild, id } = this.props;
        const { active } = this.state;
        return (
            <BuildChildCont ref={node => (this.node = node)}>
                <SettingsButton
                    onClick={() => this.setState({ active: !active })}
                    className={active && 'active-controls'}
                >
                    <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M22.5938 14.0625L21.0938 13.1719C21.0938 12.8438 21.1406 12.3281 21.1406 12C21.1406 11.7188 21.0938 11.2031 21.0938 10.875L22.5938 9.98438C23.0625 9.75 23.25 9.1875 23.1094 8.71875C22.5938 6.9375 21.6562 5.34375 20.4375 4.03125C20.0625 3.65625 19.5 3.5625 19.0312 3.84375L17.5312 4.73438C17.0156 4.3125 16.125 3.79688 15.5156 3.5625V1.82812C15.5156 1.26562 15.1875 0.84375 14.6719 0.703125C12.8906 0.28125 11.0625 0.28125 9.28125 0.703125C8.76562 0.84375 8.4375 1.26562 8.4375 1.82812V3.5625C7.82812 3.79688 6.9375 4.3125 6.42188 4.73438L4.92188 3.84375C4.45312 3.5625 3.89062 3.65625 3.51562 4.03125C2.29688 5.34375 1.35938 6.9375 0.84375 8.71875C0.703125 9.1875 0.890625 9.75 1.35938 9.98438L2.85938 10.875C2.85938 11.2031 2.8125 11.7188 2.8125 12C2.8125 12.3281 2.85938 12.8438 2.85938 13.1719L1.35938 14.0625C0.890625 14.2969 0.703125 14.8594 0.84375 15.3281C1.35938 17.1094 2.29688 18.7031 3.51562 20.0156C3.89062 20.3906 4.45312 20.4844 4.92188 20.2031L6.42188 19.3125C6.9375 19.7344 7.82812 20.25 8.4375 20.4844V22.2188C8.4375 22.7812 8.76562 23.2031 9.28125 23.3438C11.0625 23.7656 12.8906 23.7656 14.6719 23.3438C15.1875 23.2031 15.5156 22.7812 15.5156 22.2188V20.4844C16.125 20.25 17.0156 19.7344 17.5312 19.3125L19.0312 20.2031C19.5 20.4844 20.0625 20.3906 20.4375 20.0156C21.6562 18.7031 22.5938 17.1094 23.1094 15.3281C23.25 14.8594 23.0625 14.2969 22.5938 14.0625ZM19.5469 18.75L17.3438 17.4844C16.0781 18.6094 15.6562 18.8438 14.0156 19.4531V21.9375C13.4531 22.0781 12.5625 22.1719 12 22.1719C11.3906 22.1719 10.5 22.0781 9.9375 21.9375V19.4531C8.34375 18.8906 7.875 18.6094 6.60938 17.4844L4.40625 18.75C3.51562 17.7188 2.8125 16.5 2.34375 15.1875L4.54688 13.9688C4.21875 12.2812 4.21875 11.7656 4.54688 10.0781L2.34375 8.85938C2.8125 7.54688 3.51562 6.32812 4.40625 5.29688L6.60938 6.5625C7.875 5.4375 8.34375 5.15625 9.9375 4.59375V2.10938C10.5 1.96875 11.3906 1.875 12 1.875C12.5625 1.875 13.4531 1.96875 14.0156 2.10938V4.59375C15.6094 5.15625 16.0781 5.4375 17.3438 6.5625L19.5469 5.29688C20.4375 6.32812 21.1406 7.54688 21.6094 8.85938L19.4062 10.0781C19.7344 11.7656 19.7344 12.2812 19.4062 13.9688L21.6094 15.1875C21.1406 16.5 20.4375 17.7188 19.5469 18.75ZM12 7.5C9.51562 7.5 7.5 9.5625 7.5 12C7.5 14.4844 9.51562 16.5 12 16.5C14.4375 16.5 16.5 14.4844 16.5 12C16.5 9.5625 14.4375 7.5 12 7.5ZM12 15C10.3125 15 9 13.6875 9 12C9 10.3594 10.3125 9 12 9C13.6406 9 15 10.3594 15 12C15 13.6875 13.6406 15 12 15Z'
                            fill='#8F8F8F'
                        />
                    </svg>
                </SettingsButton>

                <SettingsPopup className={active && 'active-popup'}>
                    {/*<Edit>
                        <p>Edit</p>
                    </Edit> */}
                    <Delete
                        onClick={() => {
                            this.setState({ active: false });
                            handleRemoveBuild(id);
                        }}
                    >
                        <p>Delete</p>
                    </Delete>
                </SettingsPopup>

                {/* Semantic Structure Elements */}
                {name === 'nav' && (
                    <NavDiv className={this.state.active && 'active'}>
                        <span>{name}</span>
                    </NavDiv>
                )}
                {name === 'header' && (
                    <ChildDiv className={this.state.active && 'active'}>
                        <svg
                            width='24'
                            height='32'
                            viewBox='0 0 24 32'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M18 15.5C18 15.125 17.625 14.75 17.25 14.75H6.75C6.3125 14.75 6 15.125 6 15.5V17.25C6 17.6875 6.3125 18 6.75 18H17.25C17.625 18 18 17.6875 18 17.25V15.5ZM17.25 20H6.75C6.3125 20 6 20.375 6 20.75V22.5C6 22.9375 6.3125 23.25 6.75 23.25H17.25C17.625 23.25 18 22.9375 18 22.5V20.75C18 20.375 17.625 20 17.25 20ZM24 8.25C24 7.5 23.625 6.6875 23.0625 6.125L17.875 0.9375C17.3125 0.375 16.5 0 15.75 0H3C1.3125 0 0 1.375 0 3V29C0 30.6875 1.3125 32 3 32H21C22.625 32 24 30.6875 24 29V8.25ZM16 3.25L20.75 8H16V3.25ZM21 29H3V3H13V9.5C13 10.375 13.625 11 14.5 11H21V29Z'
                                fill='currentColor'
                            />
                        </svg>

                        <span>{name}</span>
                    </ChildDiv>
                )}
                {name === 'article' && (
                    <ChildDiv className={this.state.active && 'active'}>
                        <svg
                            width='24'
                            height='32'
                            viewBox='0 0 24 32'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M18 15.5C18 15.125 17.625 14.75 17.25 14.75H6.75C6.3125 14.75 6 15.125 6 15.5V17.25C6 17.6875 6.3125 18 6.75 18H17.25C17.625 18 18 17.6875 18 17.25V15.5ZM17.25 20H6.75C6.3125 20 6 20.375 6 20.75V22.5C6 22.9375 6.3125 23.25 6.75 23.25H17.25C17.625 23.25 18 22.9375 18 22.5V20.75C18 20.375 17.625 20 17.25 20ZM24 8.25C24 7.5 23.625 6.6875 23.0625 6.125L17.875 0.9375C17.3125 0.375 16.5 0 15.75 0H3C1.3125 0 0 1.375 0 3V29C0 30.6875 1.3125 32 3 32H21C22.625 32 24 30.6875 24 29V8.25ZM16 3.25L20.75 8H16V3.25ZM21 29H3V3H13V9.5C13 10.375 13.625 11 14.5 11H21V29Z'
                                fill='currentColor'
                            />
                        </svg>

                        <span>{name}</span>
                    </ChildDiv>
                )}
                {name === 'section' && (
                    <ChildDiv className={this.state.active && 'active'}>
                        <svg
                            width='24'
                            height='32'
                            viewBox='0 0 24 32'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M18 15.5C18 15.125 17.625 14.75 17.25 14.75H6.75C6.3125 14.75 6 15.125 6 15.5V17.25C6 17.6875 6.3125 18 6.75 18H17.25C17.625 18 18 17.6875 18 17.25V15.5ZM17.25 20H6.75C6.3125 20 6 20.375 6 20.75V22.5C6 22.9375 6.3125 23.25 6.75 23.25H17.25C17.625 23.25 18 22.9375 18 22.5V20.75C18 20.375 17.625 20 17.25 20ZM24 8.25C24 7.5 23.625 6.6875 23.0625 6.125L17.875 0.9375C17.3125 0.375 16.5 0 15.75 0H3C1.3125 0 0 1.375 0 3V29C0 30.6875 1.3125 32 3 32H21C22.625 32 24 30.6875 24 29V8.25ZM16 3.25L20.75 8H16V3.25ZM21 29H3V3H13V9.5C13 10.375 13.625 11 14.5 11H21V29Z'
                                fill='currentColor'
                            />
                        </svg>

                        <span>{name}</span>
                    </ChildDiv>
                )}
                {name === 'table' && (
                    <ChildDiv className={this.state.active && 'active'}>
                        <svg
                            width='24'
                            height='32'
                            viewBox='0 0 24 32'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M18 15.5C18 15.125 17.625 14.75 17.25 14.75H6.75C6.3125 14.75 6 15.125 6 15.5V17.25C6 17.6875 6.3125 18 6.75 18H17.25C17.625 18 18 17.6875 18 17.25V15.5ZM17.25 20H6.75C6.3125 20 6 20.375 6 20.75V22.5C6 22.9375 6.3125 23.25 6.75 23.25H17.25C17.625 23.25 18 22.9375 18 22.5V20.75C18 20.375 17.625 20 17.25 20ZM24 8.25C24 7.5 23.625 6.6875 23.0625 6.125L17.875 0.9375C17.3125 0.375 16.5 0 15.75 0H3C1.3125 0 0 1.375 0 3V29C0 30.6875 1.3125 32 3 32H21C22.625 32 24 30.6875 24 29V8.25ZM16 3.25L20.75 8H16V3.25ZM21 29H3V3H13V9.5C13 10.375 13.625 11 14.5 11H21V29Z'
                                fill='currentColor'
                            />
                        </svg>

                        <span>{name}</span>
                    </ChildDiv>
                )}
                {name === 'footer' && (
                    <FooterDiv className={this.state.active && 'active'}>
                        <svg
                            width='24'
                            height='32'
                            viewBox='0 0 24 32'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M18 15.5C18 15.125 17.625 14.75 17.25 14.75H6.75C6.3125 14.75 6 15.125 6 15.5V17.25C6 17.6875 6.3125 18 6.75 18H17.25C17.625 18 18 17.6875 18 17.25V15.5ZM17.25 20H6.75C6.3125 20 6 20.375 6 20.75V22.5C6 22.9375 6.3125 23.25 6.75 23.25H17.25C17.625 23.25 18 22.9375 18 22.5V20.75C18 20.375 17.625 20 17.25 20ZM24 8.25C24 7.5 23.625 6.6875 23.0625 6.125L17.875 0.9375C17.3125 0.375 16.5 0 15.75 0H3C1.3125 0 0 1.375 0 3V29C0 30.6875 1.3125 32 3 32H21C22.625 32 24 30.6875 24 29V8.25ZM16 3.25L20.75 8H16V3.25ZM21 29H3V3H13V9.5C13 10.375 13.625 11 14.5 11H21V29Z'
                                fill='currentColor'
                            />
                        </svg>

                        <span>{name}</span>
                    </FooterDiv>
                )}

                {/* Layouts */}
                {name === 'div' && (
                    <ChildDiv className={this.state.active && 'active'}>
                        <svg
                            width='24'
                            height='32'
                            viewBox='0 0 24 32'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M18 15.5C18 15.125 17.625 14.75 17.25 14.75H6.75C6.3125 14.75 6 15.125 6 15.5V17.25C6 17.6875 6.3125 18 6.75 18H17.25C17.625 18 18 17.6875 18 17.25V15.5ZM17.25 20H6.75C6.3125 20 6 20.375 6 20.75V22.5C6 22.9375 6.3125 23.25 6.75 23.25H17.25C17.625 23.25 18 22.9375 18 22.5V20.75C18 20.375 17.625 20 17.25 20ZM24 8.25C24 7.5 23.625 6.6875 23.0625 6.125L17.875 0.9375C17.3125 0.375 16.5 0 15.75 0H3C1.3125 0 0 1.375 0 3V29C0 30.6875 1.3125 32 3 32H21C22.625 32 24 30.6875 24 29V8.25ZM16 3.25L20.75 8H16V3.25ZM21 29H3V3H13V9.5C13 10.375 13.625 11 14.5 11H21V29Z'
                                fill='currentColor'
                            />
                        </svg>

                        <span>{name}</span>
                    </ChildDiv>
                )}
                {name === 'splitDiv' && (
                    <>
                        <SplitDiv className={this.state.active && 'active'}>
                            <svg
                                width='24'
                                height='32'
                                viewBox='0 0 24 32'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M18 15.5C18 15.125 17.625 14.75 17.25 14.75H6.75C6.3125 14.75 6 15.125 6 15.5V17.25C6 17.6875 6.3125 18 6.75 18H17.25C17.625 18 18 17.6875 18 17.25V15.5ZM17.25 20H6.75C6.3125 20 6 20.375 6 20.75V22.5C6 22.9375 6.3125 23.25 6.75 23.25H17.25C17.625 23.25 18 22.9375 18 22.5V20.75C18 20.375 17.625 20 17.25 20ZM24 8.25C24 7.5 23.625 6.6875 23.0625 6.125L17.875 0.9375C17.3125 0.375 16.5 0 15.75 0H3C1.3125 0 0 1.375 0 3V29C0 30.6875 1.3125 32 3 32H21C22.625 32 24 30.6875 24 29V8.25ZM16 3.25L20.75 8H16V3.25ZM21 29H3V3H13V9.5C13 10.375 13.625 11 14.5 11H21V29Z'
                                    fill='currentColor'
                                />
                            </svg>

                            <span>{name}</span>
                        </SplitDiv>
                        <SplitDiv className={this.state.active && 'active'}>
                            <svg
                                width='24'
                                height='32'
                                viewBox='0 0 24 32'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M18 15.5C18 15.125 17.625 14.75 17.25 14.75H6.75C6.3125 14.75 6 15.125 6 15.5V17.25C6 17.6875 6.3125 18 6.75 18H17.25C17.625 18 18 17.6875 18 17.25V15.5ZM17.25 20H6.75C6.3125 20 6 20.375 6 20.75V22.5C6 22.9375 6.3125 23.25 6.75 23.25H17.25C17.625 23.25 18 22.9375 18 22.5V20.75C18 20.375 17.625 20 17.25 20ZM24 8.25C24 7.5 23.625 6.6875 23.0625 6.125L17.875 0.9375C17.3125 0.375 16.5 0 15.75 0H3C1.3125 0 0 1.375 0 3V29C0 30.6875 1.3125 32 3 32H21C22.625 32 24 30.6875 24 29V8.25ZM16 3.25L20.75 8H16V3.25ZM21 29H3V3H13V9.5C13 10.375 13.625 11 14.5 11H21V29Z'
                                    fill='currentColor'
                                />
                            </svg>

                            <span>{name}</span>
                        </SplitDiv>
                    </>
                )}
                {name === 'triDiv' && (
                    <>
                        <TriDiv className={this.state.active && 'active'}>
                            <svg
                                width='24'
                                height='32'
                                viewBox='0 0 24 32'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M18 15.5C18 15.125 17.625 14.75 17.25 14.75H6.75C6.3125 14.75 6 15.125 6 15.5V17.25C6 17.6875 6.3125 18 6.75 18H17.25C17.625 18 18 17.6875 18 17.25V15.5ZM17.25 20H6.75C6.3125 20 6 20.375 6 20.75V22.5C6 22.9375 6.3125 23.25 6.75 23.25H17.25C17.625 23.25 18 22.9375 18 22.5V20.75C18 20.375 17.625 20 17.25 20ZM24 8.25C24 7.5 23.625 6.6875 23.0625 6.125L17.875 0.9375C17.3125 0.375 16.5 0 15.75 0H3C1.3125 0 0 1.375 0 3V29C0 30.6875 1.3125 32 3 32H21C22.625 32 24 30.6875 24 29V8.25ZM16 3.25L20.75 8H16V3.25ZM21 29H3V3H13V9.5C13 10.375 13.625 11 14.5 11H21V29Z'
                                    fill='currentColor'
                                />
                            </svg>

                            <span>
                                <span>{name}</span>
                            </span>
                        </TriDiv>
                        <TriDiv className={this.state.active && 'active'}>
                            <svg
                                width='24'
                                height='32'
                                viewBox='0 0 24 32'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M18 15.5C18 15.125 17.625 14.75 17.25 14.75H6.75C6.3125 14.75 6 15.125 6 15.5V17.25C6 17.6875 6.3125 18 6.75 18H17.25C17.625 18 18 17.6875 18 17.25V15.5ZM17.25 20H6.75C6.3125 20 6 20.375 6 20.75V22.5C6 22.9375 6.3125 23.25 6.75 23.25H17.25C17.625 23.25 18 22.9375 18 22.5V20.75C18 20.375 17.625 20 17.25 20ZM24 8.25C24 7.5 23.625 6.6875 23.0625 6.125L17.875 0.9375C17.3125 0.375 16.5 0 15.75 0H3C1.3125 0 0 1.375 0 3V29C0 30.6875 1.3125 32 3 32H21C22.625 32 24 30.6875 24 29V8.25ZM16 3.25L20.75 8H16V3.25ZM21 29H3V3H13V9.5C13 10.375 13.625 11 14.5 11H21V29Z'
                                    fill='currentColor'
                                />
                            </svg>

                            <span>{name}</span>
                        </TriDiv>
                        <TriDiv className={this.state.active && 'active'}>
                            <svg
                                width='24'
                                height='32'
                                viewBox='0 0 24 32'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M18 15.5C18 15.125 17.625 14.75 17.25 14.75H6.75C6.3125 14.75 6 15.125 6 15.5V17.25C6 17.6875 6.3125 18 6.75 18H17.25C17.625 18 18 17.6875 18 17.25V15.5ZM17.25 20H6.75C6.3125 20 6 20.375 6 20.75V22.5C6 22.9375 6.3125 23.25 6.75 23.25H17.25C17.625 23.25 18 22.9375 18 22.5V20.75C18 20.375 17.625 20 17.25 20ZM24 8.25C24 7.5 23.625 6.6875 23.0625 6.125L17.875 0.9375C17.3125 0.375 16.5 0 15.75 0H3C1.3125 0 0 1.375 0 3V29C0 30.6875 1.3125 32 3 32H21C22.625 32 24 30.6875 24 29V8.25ZM16 3.25L20.75 8H16V3.25ZM21 29H3V3H13V9.5C13 10.375 13.625 11 14.5 11H21V29Z'
                                    fill='currentColor'
                                />
                            </svg>

                            <span>{name}</span>
                        </TriDiv>
                    </>
                )}
                {name === 'image' && (
                    <ChildDiv className={this.state.active && 'active'}>
                        <svg
                            width='24'
                            height='32'
                            viewBox='0 0 24 32'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M18 15.5C18 15.125 17.625 14.75 17.25 14.75H6.75C6.3125 14.75 6 15.125 6 15.5V17.25C6 17.6875 6.3125 18 6.75 18H17.25C17.625 18 18 17.6875 18 17.25V15.5ZM17.25 20H6.75C6.3125 20 6 20.375 6 20.75V22.5C6 22.9375 6.3125 23.25 6.75 23.25H17.25C17.625 23.25 18 22.9375 18 22.5V20.75C18 20.375 17.625 20 17.25 20ZM24 8.25C24 7.5 23.625 6.6875 23.0625 6.125L17.875 0.9375C17.3125 0.375 16.5 0 15.75 0H3C1.3125 0 0 1.375 0 3V29C0 30.6875 1.3125 32 3 32H21C22.625 32 24 30.6875 24 29V8.25ZM16 3.25L20.75 8H16V3.25ZM21 29H3V3H13V9.5C13 10.375 13.625 11 14.5 11H21V29Z'
                                fill='currentColor'
                            />
                        </svg>

                        <span>{name}</span>
                    </ChildDiv>
                )}

                {/* Sections */}
                {name === 'cta' && (
                    <>
                        <CtaDiv className={this.state.active && 'active'}>
                            <svg
                                width='249'
                                height='139'
                                viewBox='0 0 249 139'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M49.2036 0H152.531V17.2212H49.2036V0Z'
                                    fill='currentColor'
                                />
                                <path
                                    d='M166.062 0H200.504V17.2212H166.062V0Z'
                                    fill='currentColor'
                                />
                                <path
                                    d='M0 48.009H36.9027V57.1992H0V48.009Z'
                                    fill='currentColor'
                                />
                                <path
                                    d='M137.77 48.009H186.974V57.1992H137.77V48.009Z'
                                    fill='currentColor'
                                />
                                <path
                                    d='M199.274 48.009H248.478V57.1992H199.274V48.009Z'
                                    fill='currentColor'
                                />
                                <path
                                    d='M45.5132 48.009H129.159V57.1992H45.5132V48.009Z'
                                    fill='currentColor'
                                />
                                <path
                                    d='M9.84082 65.1938H62.7346V73.8045H9.84082V65.1938Z'
                                    fill='currentColor'
                                />
                                <path
                                    d='M72.5752 65.0765H151.301V74.2667H72.5752V65.0765Z'
                                    fill='currentColor'
                                />
                                <path
                                    d='M162.372 65.0765H238.637V74.2667H162.372V65.0765Z'
                                    fill='currentColor'
                                />
                                <path
                                    d='M0 82.144H36.9027V91.3342H0V82.144Z'
                                    fill='currentColor'
                                />
                                <path
                                    d='M137.77 82.144H186.974V91.3342H137.77V82.144Z'
                                    fill='currentColor'
                                />
                                <path
                                    d='M199.274 82.144H248.478V91.3342H199.274V82.144Z'
                                    fill='currentColor'
                                />
                                <path
                                    d='M45.5132 82.144H129.159V91.3342H45.5132V82.144Z'
                                    fill='currentColor'
                                />
                                <path
                                    d='M99.6371 119.819H158.681C163.84 119.819 168.022 124.001 168.022 129.159C168.022 134.318 163.84 138.5 158.681 138.5H99.6371C94.4784 138.5 90.2964 134.318 90.2964 129.159C90.2964 124.001 94.4784 119.819 99.6371 119.819Z'
                                    stroke='currentColor'
                                />
                                <path
                                    d='M117.947 132.009H119.899C121.082 132.009 121.616 131.42 121.616 130.639C121.616 129.851 121.064 129.406 120.56 129.379V129.329C121.027 129.21 121.417 128.892 121.417 128.255C121.417 127.502 120.895 126.918 119.812 126.918H117.947V132.009ZM118.715 131.35V129.719H119.851C120.468 129.719 120.853 130.117 120.853 130.602C120.853 131.029 120.562 131.35 119.824 131.35H118.715ZM118.715 129.12V127.572H119.764C120.373 127.572 120.664 127.892 120.664 128.315C120.664 128.807 120.262 129.12 119.744 129.12H118.715ZM124.886 130.425C124.889 131.074 124.407 131.382 123.989 131.382C123.529 131.382 123.211 131.049 123.211 130.53V128.191H122.468V130.619C122.468 131.566 122.987 132.059 123.72 132.059C124.295 132.059 124.685 131.755 124.861 131.348H124.901V132.009H125.632V128.191H124.886V130.425ZM128.413 128.191H127.63V127.276H126.887V128.191H126.327V128.787H126.887V131.042C126.884 131.735 127.414 132.071 128 132.059C128.237 132.056 128.396 132.011 128.483 131.979L128.348 131.365C128.299 131.375 128.207 131.397 128.087 131.397C127.846 131.397 127.63 131.318 127.63 130.888V128.787H128.413V128.191ZM131.018 128.191H130.235V127.276H129.491V128.191H128.932V128.787H129.491V131.042C129.489 131.735 130.018 132.071 130.605 132.059C130.841 132.056 131 132.011 131.087 131.979L130.953 131.365C130.903 131.375 130.811 131.397 130.692 131.397C130.451 131.397 130.235 131.318 130.235 130.888V128.787H131.018V128.191ZM133.407 132.086C134.483 132.086 135.187 131.298 135.187 130.117C135.187 128.929 134.483 128.141 133.407 128.141C132.331 128.141 131.627 128.929 131.627 130.117C131.627 131.298 132.331 132.086 133.407 132.086ZM133.41 131.462C132.706 131.462 132.378 130.848 132.378 130.115C132.378 129.384 132.706 128.762 133.41 128.762C134.108 128.762 134.436 129.384 134.436 130.115C134.436 130.848 134.108 131.462 133.41 131.462ZM136.76 129.742C136.76 129.133 137.133 128.785 137.65 128.785C138.154 128.785 138.46 129.115 138.46 129.67V132.009H139.203V129.58C139.203 128.636 138.684 128.141 137.903 128.141C137.329 128.141 136.954 128.407 136.777 128.812H136.73V128.191H136.016V132.009H136.76V129.742Z'
                                    fill='currentColor'
                                />
                            </svg>
                        </CtaDiv>
                    </>
                )}
                {name === 'imageText' && (
                    <>
                        <ImageText className={this.state.active && 'active'}>
                            <svg
                                width='152'
                                height='108'
                                viewBox='0 0 152 108'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <mask id='path-1-inside-1' fill='white'>
                                    <rect width='152' height='108' rx='7' />
                                </mask>
                                <rect
                                    width='152'
                                    height='108'
                                    rx='7'
                                    stroke='currentColor'
                                    stroke-width='20'
                                    mask='url(#path-1-inside-1)'
                                />
                                <path
                                    d='M129.5 86H23C25.5 81.1667 32.2 71.2 39 70C47.5 68.5 58.5726 77.1325 70 75.5C80.5 74 87.5 54 106.5 54C118.9 54 127 75.3333 129.5 86Z'
                                    fill='currentcolor'
                                />
                                <circle
                                    cx='52.5'
                                    cy='38.5'
                                    r='13.5'
                                    fill='currentcolor'
                                />
                            </svg>
                        </ImageText>
                        <ImageText className={this.state.active && 'active'}>
                            <svg
                                width='207'
                                height='106'
                                viewBox='0 0 207 106'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path d='M0 0H84V14H0V0Z' fill='currentColor' />
                                <path
                                    d='M95 0H123V14H95V0Z'
                                    fill='currentColor'
                                />
                                <path
                                    d='M0 43.0288H30V50.5H0V43.0288Z'
                                    fill='currentColor'
                                />
                                <path
                                    d='M112 43.0288H152V50.5H112V43.0288Z'
                                    fill='currentColor'
                                />
                                <path
                                    d='M162 43.0288H202V50.5H162V43.0288Z'
                                    fill='currentColor'
                                />
                                <path
                                    d='M37 43.0288H105V50.5H37V43.0288Z'
                                    fill='currentColor'
                                />
                                <path
                                    d='M0 56.9038H51V64.375H0V56.9038Z'
                                    fill='currentColor'
                                />
                                <path
                                    d='M59 56.9038H123V64.375H59V56.9038Z'
                                    fill='currentColor'
                                />
                                <path
                                    d='M132 56.9038H194V64.375H132V56.9038Z'
                                    fill='currentColor'
                                />
                                <path
                                    d='M0 70.7788H30V78.25H0V70.7788Z'
                                    fill='currentColor'
                                />
                                <path
                                    d='M112 70.7788H152V78.25H112V70.7788Z'
                                    fill='currentColor'
                                />
                                <path
                                    d='M162 70.7788H202V78.25H162V70.7788Z'
                                    fill='currentColor'
                                />
                                <path
                                    d='M37 70.7788H105V78.25H37V70.7788Z'
                                    fill='currentColor'
                                />
                                <path
                                    d='M207 84.6538H151V92.125H207V84.6538Z'
                                    fill='currentColor'
                                />
                                <path
                                    d='M143 84.6538H79V92.125H143V84.6538Z'
                                    fill='currentColor'
                                />
                                <path
                                    d='M70 84.6538H0V92.125H70V84.6538Z'
                                    fill='currentColor'
                                />
                                <path
                                    d='M202 98.5288H172V106H202V98.5288Z'
                                    fill='currentColor'
                                />
                                <path
                                    d='M90 98.5288H50V106H90V98.5288Z'
                                    fill='currentColor'
                                />
                                <path
                                    d='M40 98.5288H0V106H40V98.5288Z'
                                    fill='currentColor'
                                />
                                <path
                                    d='M165 98.5288H97V106H165V98.5288Z'
                                    fill='currentColor'
                                />
                            </svg>
                        </ImageText>
                    </>
                )}
                {name === 'navContent' && (
                    <NavDivCont className={this.state.active && 'active'}>
                        <div>Logo</div>
                        <div>Link</div>
                        <div>Link</div>
                        <div>Link</div>
                    </NavDivCont>
                )}
                {name === 'footerContent' && (
                    <FooterDiv
                        className={this.state.active && 'active'}
                    ></FooterDiv>
                )}
            </BuildChildCont>
        );
    }
}

export default BuildChild;
