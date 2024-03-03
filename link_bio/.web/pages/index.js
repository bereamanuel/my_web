/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext } from "/utils/context"
import { Event, getBackendURL, getRefValue, getRefValues, isTrue } from "/utils/state"
import { Avatar as RadixThemesAvatar, Box as RadixThemesBox, Button as RadixThemesButton, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, RadioGroup as RadixThemesRadioGroup, Separator as RadixThemesSeparator, Strong as RadixThemesStrong, Text as RadixThemesText, TextField as RadixThemesTextField, Theme as RadixThemesTheme } from "@radix-ui/themes"
import env from "/env.json"
import NextLink from "next/link"
import { GithubIcon as LucideGithubIcon, LinkedinIcon as LucideLinkedinIcon, MailIcon as LucideMailIcon } from "lucide-react"
import { Root as RadixFormRoot } from "@radix-ui/react-form"
import "@radix-ui/themes/styles.css"
import theme from "/utils/theme.js"
import NextHead from "next/head"



export function Link_c313e03dd911252d9d87036b399ff7af () {


  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "&:hover": null}} size={`2`} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://google.com`} passHref={true}>
  {`© 2021-2024 BEREAMANUEL BY MANUEL BEREA.`}
</NextLink>
</RadixThemesLink>
  )
}

export function Link_247d44cf838b76dc815ae019cffa3f19 () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "paddingLeft": "0.5em", "textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://github.com/bereamanuel`} passHref={true}>
  <LucideGithubIcon css={{"color": "black"}}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Fragment_73db36df38cdd793143ee630011ab6cc () {
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
  <RadixThemesText as={`p`} css={{"fontStyle": 300, "fontWeight": "normal"}}>
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

export function Link_d8e89129d1296914ce1f9713db8d01c3 () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "paddingLeft": "0.5em", "textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.linkedin.com/in/manuel-berea/`} passHref={true}>
  <LucideLinkedinIcon css={{"color": "#1086CD"}}/>
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

export function Link_cad99a9c5ffb952dd078f0b793876f3b () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "paddingLeft": "0.5em", "textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.kaggle.com/manuelbereaarellano`} passHref={true}>
  <RadixThemesAvatar size={`2`} src={`/kaggle.ico`}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Root_6a8882a4f4e60039369901c2e0a2754e () {
  
    const handleSubmit_4038683695e0e6eb8e2a554ff648ff40 = useCallback((ev) => {
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
    <RadixFormRoot className={`Root`} css={{"width": "100%"}} onSubmit={handleSubmit_4038683695e0e6eb8e2a554ff648ff40}>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesRadioGroup.Root color={`gray`} css={{"width": "100%"}} defaultValue={``} highContrast={true} name={`response`} required={true} size={`3`}>
  <Flex_1801689252e9a685a052852f6df7139f/>
</RadixThemesRadioGroup.Root>
  <RadixThemesTextField.Input color={`gray`} css={{"highContrast": true, "serverInvalid": true, "width": "100%"}} name={`email`} placeholder={`Email`} required={true} type={`email`}/>
  <RadixThemesButton color={`gray`} css={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "2em", "colorScheme": "#000000", "color": "#FFFFFF", "&:hover": {"colorScheme": "gray", "highContrast": true}}} highContrast={true} type={`submit`}>
  {`Submit`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixFormRoot>
  )
}

export function Flex_1801689252e9a685a052852f6df7139f () {


  return (
    <RadixThemesFlex direction={`row`} gap={`5`}>
  {["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map((value, index_1ff0cb1f63e66d7e0e2a82679e64b07c) => (
  <RadixThemesText as={`label`} key={index_1ff0cb1f63e66d7e0e2a82679e64b07c} size={`3`}>
  <RadixThemesFlex gap={`2`}>
  <RadixThemesRadioGroup.Item value={isTrue(((typeof value) === (`string`))) ? value : JSON.stringify(value)}/>
  {isTrue(((typeof value) === (`string`))) ? value : JSON.stringify(value)}
</RadixThemesFlex>
</RadixThemesText>
))}
</RadixThemesFlex>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_73db36df38cdd793143ee630011ab6cc/>
  <RadixThemesBox>
  <RadixThemesFlex css={{"width": "100%", "position": "sticky", "padding": "1em", "zIndex": "999", "top": "0", "background": "white"}}>
  <RadixThemesText as={`p`} css={{"fontSize": "1.5em", "fontStyle": 300, "fontWeight": "normal"}}>
  {`Manuel Berea`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"fontSize": "0.8em", "padding": "1em", "fontStyle": 300, "fontWeight": "normal"}}>
  {`Home`}
</RadixThemesText>
  <RadixThemesSeparator orientation={`vertical`} size={`4`}/>
  <RadixThemesText as={`p`} css={{"fontSize": "0.8em", "padding": "1em", "fontStyle": 300, "fontWeight": "normal"}}>
  {`Biography`}
</RadixThemesText>
  <RadixThemesSeparator orientation={`vertical`} size={`4`}/>
  <RadixThemesText as={`p`} css={{"fontSize": "0.8em", "padding": "1em", "fontStyle": 300, "fontWeight": "normal"}}>
  {`Projects`}
</RadixThemesText>
  <RadixThemesSeparator orientation={`vertical`} size={`4`}/>
  <RadixThemesText as={`p`} css={{"fontSize": "0.8em", "padding": "1em", "fontStyle": 300, "fontWeight": "normal"}}>
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
  <RadixThemesText as={`p`} css={{"fontStyle": 300, "fontWeight": "normal"}}>
  {`Soy analista de datos desde hace mas de 3 años. Actualmente trabajo como freelance Data Analyst.
                            Aquí puedes encontrar una muestra de mi trabajo.
                            ¡Bienvenid@!`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`column`} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "border": "1px solid", "borderRadius": "2em", "padding": "2em"}} direction={`column`} gap={`2`}>
  <RadixThemesHeading>
  {`¿Con que probabilidad del 0 al 10 recomendarías nuestros servicios?`}
</RadixThemesHeading>
  <Root_6a8882a4f4e60039369901c2e0a2754e/>
</RadixThemesFlex>
  <RadixThemesText align={`center`} as={`p`} css={{"fontStyle": 300, "fontWeight": "normal"}}>
  {`¡Durante 2024 llevamos 6 respuestas!`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "padding": "1em"}} direction={`row`} gap={`2`}>
  <Link_c313e03dd911252d9d87036b399ff7af/>
  <RadixThemesText as={`p`} css={{"fontStyle": 300, "fontWeight": "normal"}} size={`2`}>
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
