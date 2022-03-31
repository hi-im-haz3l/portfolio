import NextLink from 'next/link'
import { Tab, Tabs, TabList, TabIndicator, Link, useColorModeValue } from '@chakra-ui/react'
import { useIntl } from 'react-intl'

function LocaleId (locale) {
    const locales = {
        'en-US': 0,
        'fi-FI': 1,
        'vi-VN': 2,
        'undefined': -1
    };
    return locales[locale];
}

const TabStyling = ({ locale, selected }) => {
    const color = useColorModeValue('gray200', 'whiteAlpha.900')
    const invertColor = useColorModeValue('#ffffff', '#1A202C')
    const title = locale.substring(0, 2).toUpperCase()

    return (locale == selected) ? (
        <Tab
            position='relative'
            zIndex={1}
            color={invertColor}
            fontWeight='semibold'
        > 
            {title}
        </Tab>
    ) : (
        <NextLink href='' locale={locale} passHref>
            <Link color={color}>
                <Tab
                    position='relative'
                    zIndex={1}
                    fontWeight='semibold'
                >
                    {title}
                </Tab>
            </Link>
        </NextLink>
    )
}

const LocalesSelector = () => {
    const {locale} = useIntl()
    const selected = (LocaleId(locale) + 1) ? LocaleId(locale) : LocaleId(undefined)

    return (
        <Tabs
            position='relative'
            variant='unstyled'
            defaultIndex={selected}
        >
            <TabList>
                <TabStyling locale='en-US' selected={locale}></TabStyling>
                <TabStyling locale='fi-FI' selected={locale}></TabStyling>
                <TabStyling locale='vi-VN' selected={locale}></TabStyling>
            </TabList>
            <TabIndicator
                mt='-40px'
                height='40px'
                bg={useColorModeValue('#375ba3', '#4fd1c5')}
                borderRadius='xl'
                boxShadow= 'lg'
            />
        </Tabs>
    )
}

export default LocalesSelector