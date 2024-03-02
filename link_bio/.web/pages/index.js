/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, getRefValue, getRefValues, isTrue } from "/utils/state"
import { Box as RadixThemesBox, Button as RadixThemesButton, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Slider as RadixThemesSlider, Text as RadixThemesText, TextField as RadixThemesTextField } from "@radix-ui/themes"
import env from "/env.json"
import NextLink from "next/link"
import { ArrowRightIcon as LucideArrowRightIcon } from "lucide-react"
import { Root as RadixFormRoot } from "@radix-ui/react-form"
import NextHead from "next/head"



export function Link_01845a9070e1e57a5111c43d9b668c48 () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`mbaberearellano@gmail.com`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "2em"}}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <LucideArrowRightIcon css={{"color": "var(--current-color)", "width": "2em", "heigth": "2em"}}/>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"fontSize": "1em"}}>
  {`email`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontSize": "0.8em"}}>
  {``}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Heading_d2ea26b6abbda389f6514117935bc96c () {
  const state__slider_value = useContext(StateContexts.state__slider_value)


  return (
    <RadixThemesHeading size={`4`}>
  {state__slider_value.value}
</RadixThemesHeading>
  )
}

export function Link_582a9327f86491264e9bb9441d9d3042 () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.kaggle.com/manuelbereaarellano`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "2em"}}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <LucideArrowRightIcon css={{"color": "var(--current-color)", "width": "2em", "heigth": "2em"}}/>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"fontSize": "1em"}}>
  {`Kaggle`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontSize": "0.8em"}}>
  {``}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Root_8e91d0fe7f4b68201280e71313006d61 () {
  
    const handleSubmit_e4137891ba745d7b8ddbb402f4ab163d = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...{}}

        addEvents([Event("state.form_state.handle_submit", {form_data:form_data})])

        if (true) {
            $form.reset()
        }
    })
    
  const [addEvents, connectError] = useContext(EventLoopContext);


  return (
    <RadixFormRoot className={`Root`} css={{"width": "100%"}} onSubmit={handleSubmit_e4137891ba745d7b8ddbb402f4ab163d}>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`column`} gap={`2`}>
  <Heading_d2ea26b6abbda389f6514117935bc96c/>
  <Slider_3a86fcfd0ad336be2e0df930d6801726/>
  <RadixThemesTextField.Input css={{"serverInvalid": true}} name={`email`} placeholder={`Email`}/>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "2em"}} type={`submit`}>
  {`Submit`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixFormRoot>
  )
}

export function Fragment_1762bb90abdb81b879b2a22edbbe01a1 () {
  const [addEvents, connectError] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <RadixThemesDialog.Root open={connectError !== null}>
  <RadixThemesDialog.Content>
  <RadixThemesDialog.Title>
  {`Connection Error`}
</RadixThemesDialog.Title>
  <RadixThemesText as={`p`}>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {getBackendURL(env.EVENT).href}
</RadixThemesText>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Slider_3a86fcfd0ad336be2e0df930d6801726 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_value_commit_adc5f4464c458bb3f4470d880c64be00 = useCallback((_e0) => addEvents([Event("state.slider_value.set_end", {value:_e0})], (_e0), {}), [addEvents, Event])

  return (
    <RadixThemesSlider css={{"width": "100%"}} defaultValue={[5]} max={10} min={0} name={`response`} onValueCommit={on_value_commit_adc5f4464c458bb3f4470d880c64be00}/>
  )
}

export function Link_c313e03dd911252d9d87036b399ff7af () {


  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "&:hover": null}} size={`2`} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://google.com`} passHref={true}>
  {`© 2021-2024 BEREAMANUEL BY MANUEL BEREA.`}
</NextLink>
</RadixThemesLink>
  )
}

export function Link_2a304cbd83220833670be3fa5c98b46a () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://github.com/bereamanuel`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "2em"}}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <LucideArrowRightIcon css={{"color": "var(--current-color)", "width": "2em", "heigth": "2em"}}/>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"fontSize": "1em"}}>
  {`Github`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontSize": "0.8em"}}>
  {``}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_917a4e23eb89b81671f8aa6cf9717f44 () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.linkedin.com/in/manuel-berea/`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "2em"}}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <LucideArrowRightIcon css={{"color": "var(--current-color)", "width": "2em", "heigth": "2em"}}/>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"fontSize": "1em"}}>
  {`LinkedIn`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontSize": "0.8em"}}>
  {``}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_1762bb90abdb81b879b2a22edbbe01a1/>
  <RadixThemesBox>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "position": "sticky", "padding": "1em", "zIndex": "999"}} direction={`row`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"fontSize": "2em", "height": "40px", "width": "100%"}} size={`6`}>
  {`Manuel Berea`}
</RadixThemesText>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`row`} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`Home`}
</RadixThemesText>
  <RadixThemesText as={`p`}>
  {`My bio`}
</RadixThemesText>
  <RadixThemesText as={`p`}>
  {`Projects`}
</RadixThemesText>
  <RadixThemesText as={`p`}>
  {`Contact`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesFlex align={`start`} css={{"maxWidth": "800px", "width": "100%", "marginLeft": "2em", "marginRight": "2em"}} direction={`column`} gap={`2`}>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesFlex align={`center`} direction={`column`} gap={`2`}>
  <img align={`center`} css={{"size": "5"}} src={`/images/me2.jpg`}/>
  <RadixThemesText align={`center`} as={`p`}>
  {`¡HOLA! SOY MANUEL BEREA`}
</RadixThemesText>
  <RadixThemesText align={`center`} as={`p`}>
  {`Soy analista de datos desde hace mas de 3 años. Actualmente trabajo como freelance Data Analyst.
                            Aquí puedes encontrar una muestra de mi trabajo.
                            ¡Bienvenid@!`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex css={{"width": "100%", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesFlex align={`center`} css={{"width": "100%"}} direction={`row`} gap={`2`}>
  <Link_917a4e23eb89b81671f8aa6cf9717f44/>
  <Link_2a304cbd83220833670be3fa5c98b46a/>
  <Link_582a9327f86491264e9bb9441d9d3042/>
  <Link_01845a9070e1e57a5111c43d9b668c48/>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex css={{"width": "100%", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "border": "1px solid", "borderRadius": "2em", "padding": "1em"}} direction={`column`} gap={`2`}>
  <RadixThemesHeading css={{"size": "6", "width": "100%", "paddingTop": "1em"}}>
  {`How likely are you to recommend us on a scale from 0 to 10?`}
</RadixThemesHeading>
  <Root_8e91d0fe7f4b68201280e71313006d61/>
</RadixThemesFlex>
  <RadixThemesText align={`center`} as={`p`}>
  {`¡Durante 2024 llevamos 3 respuestas!`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex css={{"textAlign": "center", "width": "100%", "margin": "1em", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <Link_c313e03dd911252d9d87036b399ff7af/>
  <RadixThemesText as={`p`} size={`2`}>
  {`Data Analyst.`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
