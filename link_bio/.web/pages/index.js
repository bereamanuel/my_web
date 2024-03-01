/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, getRefValue, getRefValues, isTrue } from "/utils/state"
import { Box as RadixThemesBox, Button as RadixThemesButton, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Slider as RadixThemesSlider, Text as RadixThemesText, TextField as RadixThemesTextField } from "@radix-ui/themes"
import env from "/env.json"
import NextLink from "next/link"
import { Root as RadixFormRoot } from "@radix-ui/react-form"
import NextHead from "next/head"



export function Slider_3a86fcfd0ad336be2e0df930d6801726 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_value_commit_adc5f4464c458bb3f4470d880c64be00 = useCallback((_e0) => addEvents([Event("state.slider_value.set_end", {value:_e0})], (_e0), {}), [addEvents, Event])

  return (
    <RadixThemesSlider css={{"width": "100%"}} defaultValue={[5]} max={10} min={0} name={`response`} onValueCommit={on_value_commit_adc5f4464c458bb3f4470d880c64be00}/>
  )
}

export function Link_7795f22e8cf81d13c4314ab6e6bc4da5 () {


  return (
    <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://github.com/bereamanuel`} passHref={true}>
  <RadixThemesButton>
  {`Github`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_e6c45e94e89381b44ebc24e17692d0e1 () {


  return (
    <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.linkedin.com/in/manuel-berea/`} passHref={true}>
  <RadixThemesButton>
  {`LinkedIn`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Heading_56bcf49bb1c3853ee9d97d7a96c300fb () {
  const state__slider_value = useContext(StateContexts.state__slider_value)


  return (
    <RadixThemesHeading>
  {state__slider_value.value}
</RadixThemesHeading>
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

export function Root_556f5ffb229347359656fcc149843751 () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  
    const handleSubmit_de0a81a2bf4b110a9e6ab9b0c2ed4e21 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...{}}

        addEvents([Event("state.form_state.handle_submit", {form_data:form_data})])

        if (true) {
            $form.reset()
        }
    })
    


  return (
    <RadixFormRoot className={`Root`} onSubmit={handleSubmit_de0a81a2bf4b110a9e6ab9b0c2ed4e21}>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesTextField.Input css={{"serverInvalid": true}} name={`email`} placeholder={`Email`}/>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <Heading_56bcf49bb1c3853ee9d97d7a96c300fb/>
  <Slider_3a86fcfd0ad336be2e0df930d6801726/>
</RadixThemesFlex>
  <RadixThemesButton type={`submit`}>
  {`Submit`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixFormRoot>
  )
}

export function Link_cafb373b3da31341b20d3271702060f5 () {


  return (
    <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.kaggle.com/manuelbereaarellano`} passHref={true}>
  <RadixThemesButton>
  {`Kaggle`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_70d87cad4239fc9a284e7f84e033416f () {


  return (
    <RadixThemesLink asChild={true} size={`2`} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://google.com`} passHref={true}>
  {`© 2021-2024 BEREAMANUEL BY MANUEL BEREA.`}
</NextLink>
</RadixThemesLink>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_1762bb90abdb81b879b2a22edbbe01a1/>
  <RadixThemesBox>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"position": "sticky", "padding": "16px", "zIndex": "999"}} direction={`column`} gap={`2`}>
  <RadixThemesText align={`center`} as={`p`} css={{"height": "40px"}} size={`6`} weight={`medium`}>
  {`Manuel Berea`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <img css={{"size": "5"}} src={`/images/me2.jpg`}/>
  <RadixThemesText as={`p`}>
  {`HOLA MI NOMBRE ES MANUEL BEREA`}
</RadixThemesText>
  <RadixThemesText as={`p`}>
  {`Soy analista de datos desde hace mas de 3 años. Actualmente trabajo como freelance Data Analyst.
                Aquí puedes encontrar una muestra de mi trabajo.
                ¡Bienvenid@!`}
</RadixThemesText>
  <RadixThemesLink asChild={true} color={`gray`}>
  <NextLink href={`mbaberearellano@gmail.com`} passHref={true}>
  {`mbaberearellano@gmail.com`}
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <Link_e6c45e94e89381b44ebc24e17692d0e1/>
  <Link_7795f22e8cf81d13c4314ab6e6bc4da5/>
  <Link_cafb373b3da31341b20d3271702060f5/>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`How likely are you to recommend us on a scale from 0 to 10?`}
</RadixThemesText>
  <Root_556f5ffb229347359656fcc149843751/>
</RadixThemesFlex>
  <RadixThemesText as={`p`}>
  {`¡Durante 2024 llevamos 2 respuestas!`}
</RadixThemesText>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <Link_70d87cad4239fc9a284e7f84e033416f/>
  <RadixThemesText as={`p`} size={`2`}>
  {`Data Analyst.`}
</RadixThemesText>
  <img css={{"size": "2"}} src={`/favicon.ico`}/>
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
