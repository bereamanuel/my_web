/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, getRefValue, getRefValues, isTrue } from "/utils/state"
import { Avatar as RadixThemesAvatar, Box as RadixThemesBox, Button as RadixThemesButton, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Separator as RadixThemesSeparator, Slider as RadixThemesSlider, Strong as RadixThemesStrong, Text as RadixThemesText, TextField as RadixThemesTextField } from "@radix-ui/themes"
import env from "/env.json"
import NextLink from "next/link"
import { GithubIcon as LucideGithubIcon, LinkedinIcon as LucideLinkedinIcon, MailIcon as LucideMailIcon } from "lucide-react"
import { Root as RadixFormRoot } from "@radix-ui/react-form"
import NextHead from "next/head"



export function Link_247d44cf838b76dc815ae019cffa3f19 () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "paddingLeft": "0.5em", "textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://github.com/bereamanuel`} passHref={true}>
  <LucideGithubIcon css={{"color": "black"}}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_d8e89129d1296914ce1f9713db8d01c3 () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "paddingLeft": "0.5em", "textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.linkedin.com/in/manuel-berea/`} passHref={true}>
  <LucideLinkedinIcon css={{"color": "#1086CD"}}/>
</NextLink>
</RadixThemesLink>
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

export function Heading_9a60873652c083db78cab08377a3a6f2 () {
  const state__slider_value = useContext(StateContexts.state__slider_value)


  return (
    <RadixThemesHeading css={{"width": "100%"}} size={`4`}>
  {state__slider_value.value}
</RadixThemesHeading>
  )
}

export function Link_cad99a9c5ffb952dd078f0b793876f3b () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "paddingLeft": "0.5em", "textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.kaggle.com/manuelbereaarellano`} passHref={true}>
  <RadixThemesAvatar size={`2`} src={`/kaggle.ico`}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_07d481a323bf7514964808ce62c06acf () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "paddingLeft": "0.5em", "textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`mailto:mbaberearellano@gmail.com`} passHref={true}>
  <LucideMailIcon css={{"color": "black"}}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Root_15d56b694d5a021aff195d151735ac37 () {
  
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
  <RadixThemesFlex align={`start`} css={{"paddingTop": "1em", "width": "100%"}} direction={`row`} gap={`2`}>
  <Slider_007d3c72b3dbb7f453284331ad4dab56/>
  <Heading_9a60873652c083db78cab08377a3a6f2/>
</RadixThemesFlex>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesTextField.Input css={{"serverInvalid": true}} name={`email`} placeholder={`Email`}/>
</RadixThemesFlex>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "2em"}} type={`submit`}>
  {`Submit`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixFormRoot>
  )
}

export function Slider_007d3c72b3dbb7f453284331ad4dab56 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_value_commit_adc5f4464c458bb3f4470d880c64be00 = useCallback((_e0) => addEvents([Event("state.slider_value.set_end", {value:_e0})], (_e0), {}), [addEvents, Event])

  return (
    <RadixThemesSlider css={{"width": "100%", "paddingTop": "0.5em"}} defaultValue={[5]} max={10} min={0} name={`response`} onValueCommit={on_value_commit_adc5f4464c458bb3f4470d880c64be00}/>
  )
}

export function Fragment_067eb4f542d192d350450e9682d4fc4a () {
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
  <RadixThemesText as={`p`} css={{"width": "100%"}}>
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

export default function Component() {

  return (
    <Fragment>
  <Fragment_067eb4f542d192d350450e9682d4fc4a/>
  <RadixThemesBox>
  <RadixThemesFlex css={{"width": "100%", "position": "sticky", "padding": "1em", "zIndex": "999", "top": "0", "background": "white"}}>
  <RadixThemesText as={`p`} css={{"fontSize": "2em", "width": "100%"}}>
  {`Manuel Berea`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"padding": "1em", "width": "100%"}}>
  {`Home`}
</RadixThemesText>
  <RadixThemesSeparator orientation={`vertical`} size={`4`}/>
  <RadixThemesText as={`p`} css={{"padding": "1em", "width": "100%"}}>
  {`Biography`}
</RadixThemesText>
  <RadixThemesSeparator orientation={`vertical`} size={`4`}/>
  <RadixThemesText as={`p`} css={{"padding": "1em", "width": "100%"}}>
  {`Projects`}
</RadixThemesText>
  <RadixThemesSeparator orientation={`vertical`} size={`4`}/>
  <RadixThemesText as={`p`} css={{"padding": "1em", "width": "100%"}}>
  {`Contact`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesFlex align={`start`} css={{"maxWidth": "800px", "width": "100%", "marginLeft": "2em", "marginRight": "2em"}} direction={`column`} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "center"}} direction={`column`} gap={`2`}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <img align={`center`} css={{"size": "5", "borderRadius": "2em"}} src={`/images/me2.jpg`}/>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesStrong css={{"align": "center", "paddingTop": "1em", "paddingLeft": "2em"}}>
  {`¡HOLA! SOY MANUEL BEREA`}
</RadixThemesStrong>
  <RadixThemesFlex css={{"width": "100%", "paddingTop": "1em", "paddingLeft": "2em", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesFlex align={`center`} css={{"width": "100%"}} direction={`row`} gap={`2`}>
  <Link_d8e89129d1296914ce1f9713db8d01c3/>
  <Link_247d44cf838b76dc815ae019cffa3f19/>
  <Link_cad99a9c5ffb952dd078f0b793876f3b/>
  <Link_07d481a323bf7514964808ce62c06acf/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesText as={`p`} css={{"width": "100%"}}>
  {`Soy analista de datos desde hace mas de 3 años. Actualmente trabajo como freelance Data Analyst.
                            Aquí puedes encontrar una muestra de mi trabajo.
                            ¡Bienvenid@!`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`column`} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "border": "1px solid", "borderRadius": "2em", "padding": "2em"}} direction={`column`} gap={`2`}>
  <RadixThemesHeading css={{"size": "6", "width": "100%"}}>
  {`¿Con que probabilidad del 0 al 10 recomendarías nuestros servicios?`}
</RadixThemesHeading>
  <Root_15d56b694d5a021aff195d151735ac37/>
</RadixThemesFlex>
  <RadixThemesText align={`center`} as={`p`} css={{"width": "100%"}}>
  {`¡Durante 2024 llevamos 6 respuestas!`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "padding": "1em"}} direction={`row`} gap={`2`}>
  <Link_c313e03dd911252d9d87036b399ff7af/>
  <RadixThemesText as={`p`} css={{"width": "100%"}} size={`2`}>
  {`Data Analyst.`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
  <NextHead>
  <title>
  {`BereaManuel`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
