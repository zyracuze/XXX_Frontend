*** Settings ***
Library    SeleniumLibrary


*** Variables ***
${BROWSER}    chrome
${URL}    http://178.128.21.208/details/15


*** Test Cases ***
SuccessfulOrderTheProduct
    Open Product Detail
    Verify Product Details 01
    Add To Shopping Cart
    Verify Product Detail on Shopping Cart 01
    Go Back To Shopping Cart
    Verify Product Details 02
    Add To Shopping Cart
    Verify Product Detail on Shopping Cart 02
    Proceed To Checkout
    Input Shipping Address
    Thankyou Page


*** Keywords ***
Open Product Detail
    Open Browser    ${URL}    ${BROWSER}

Verify Product Details 01
    Wait Until Element Contains    id=detailName    Sailboat
    Wait Until Element Is Visible    id=detailPicture
    Wait Until Element Contains    id=detailBrand    CoolKidz
    Wait Until Element Contains    id=detailGender    Male
    Wait Until Element Contains    id=detailAge    over8
    Wait Until Element Contains    id=detailPrice    24.95
    Wait Until Element Is Visible    id=detailShippingMethod
    Wait Until Element Is Visible    id=detailStatus
    Wait Until Element Contains    id=detailQuantity    1

Verify Product Details 02
    Wait Until Element Contains    id=detailName    Scrabble
    Wait Until Element Is Visible    id=detailPicture
    Wait Until Element Contains    id=detailBrand    GeekToys
    Wait Until Element Contains    id=detailGender    Neutral
    Wait Until Element Contains    id=detailAge    over8
    Wait Until Element Contains    id=detailPrice    19.95
    Wait Until Element Is Visible    id=detailShippingMethod
    Wait Until Element Is Visible    id=detailStatus
    Wait Until Element Contains    id=detailQuantity    1

Add To Shopping Cart
    Click Button    id=detailAddButton

Go Back To Shopping Cart
    Click Button    id=shoppingCartBackButton

Verify Product Detail on Shopping Cart 01
    Wait Until Page Contains    Sailboat by CoolKids
    Wait Until Page Contains    Male
    Wait Until Page Contains    over8
    Wait Until Page Contains    In Stock
    Wait Until Element Is Visible    id=shoppingCartDeleteButton1
    Wait Until Element Contains    id=shippingCartQuantity1    1
    Wait Until Element Contains    id=shippingCartPrice1    24.95
    Wait Until Element Contains    id=shippingCartShippingFee    150.00
    Wait Until Element Contains    id=shippingCartSubtotalItem    1
    Wait Until Element Contains    id=shippingCartSubtotalPrice    174.95

Verify Product Detail on Shopping Cart 02
    Wait Until Page Contains    Sailboat by CoolKids
    Wait Until Page Contains    Male
    Wait Until Page Contains    over8
    Wait Until Page Contains    In Stock
    Wait Until Element Is Visible    id=shoppingCartDeleteButton1
    Wait Until Element Contains    id=shippingCartQuantity1    1
    Wait Until Element Contains    id=shippingCartPrice1    24.95
    Wait Until Page Contains    Scrabble by GeekToys
    Wait Until Page Contains    Neutral
    Wait Until Page Contains    over8
    Wait Until Page Contains    In Stock
    Wait Until Element Is Visible    id=shoppingCartDeleteButton2
    Wait Until Element Contains    id=shippingCartQuantity2    1
    Wait Until Element Contains    id=shippingCartPrice2    19.95
    Wait Until Element Contains    id=shippingCartShippingFee    150.00
    Wait Until Element Contains    id=shippingCartSubtotalItem    2
    Wait Until Element Contains    id=shippingCartSubtotalPrice    194.90

Proceed To Checkout
    Click Button    id=shippingCartCheckoutButton

Input Shipping Address
    Input Text    id=shippingAddrFullName    BHAJAN PREET SINGH
    Input Text    id=shippingAddrAddress1    WING-3,3,101,KHARADI
    Input Text    id=shippingAddrAddress2    PUNE
    Input Text    id=shippingAddrCity    PUNE
    Input Text    id=shippingAddrProvince    MAHARASHTRA
    Input Text    id=shippingAddrPostCode    4110014
    Click Button    id=shippingAddrDeliverAddrButton

Thankyou Page
    Wait Until Page Contains    Thanks you
    Wait Until Element Is Visible    id=thankyouQrPicture
