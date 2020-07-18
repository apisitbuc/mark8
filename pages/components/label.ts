import styled from 'styled-components'
import FontManager from 'src/Manager/FontManager';
import ColorManager from 'src/Manager/ColorManager'

type Props = {
  thin?: boolean,
  underline?: boolean,
  bold?: boolean,
  bolder?: boolean,
  color?: string,
  fontSize?: string,
  singleLine?: boolean,
  hideOverflow?: boolean,
  lineHeight?: string | number
}

export const Label = styled("label")`
    color: ${(props: Props) => props.color || ColorManager.default.text};
    font-size: ${(props: Props) => props.fontSize || FontManager.default.text};
    margin: 0px;
    padding: 0px;
    line-height: ${(props: Props) => props.lineHeight || props.fontSize || FontManager.default.text};
    white-space: ${(props: Props) => props.singleLine ? 'nowrap' : 'unset'};
    text-overflow: ${(props: Props) => props.singleLine ? 'ellipsis' : 'initial'};
    overflow: ${(props: Props) => props.hideOverflow ? 'hidden' : 'initial'};
    font-weight: ${(props: Props) => props.thin ? 100 : props.bold ? 'bold' : props.bolder ? 900 : 'normal'};
    text-decoration: ${(props: Props) => props.underline ? 'underline' : 'inherit'};
`
