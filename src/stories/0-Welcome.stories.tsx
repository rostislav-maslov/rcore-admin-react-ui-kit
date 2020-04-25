import React, { useState } from 'react'
import { Welcome } from '@storybook/react/demo'
import { Add, Visibility, StarBorder } from '@material-ui/icons'
import { Radio } from '../ui/Radio'
import { CheckBox } from '../ui/Checkbox'
import { Button } from '../ui/Button'
import { Dropdown } from '../ui/Dropdown'
import { TextField } from '../ui/TextField'
import { PasswordField } from '../ui/PasswordField'
import { DatePicker } from '../ui/DatePicker'
import { TimePicker } from '../ui/TimePicker'
import { Table } from '../ui/Table'
import { Toast } from '../ui/Toast'
import { Breadcrumbs } from '../ui/Breadcrumbs'
import { Card } from '../ui/Card'
import { CardHeader, CardMedia } from '@material-ui/core'
import StockImage from '../assets/img/stock1.png'
import { DateTimePicker } from '../ui/DateTimePicker'
import { Modal } from '../ui/Modal'
import { SidebarMenu } from '../ui/SidebarMenu'
import Logo from '../assets/img/logo.png'
import { Link, BrowserRouter as Router } from 'react-router-dom'
// import { DatePicker } from "../ui/DateRangePicker";

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Welcome',
  component: Welcome,
}

export const RadioInputStory = () => <Radio />
export const CheckboxStory = () => <CheckBox />

export const ButtonIconWithIconStory = () => (
  <Button variant="contained" endIcon={<Add />}>
    add to cart
  </Button>
)

export const DropDownStory = () => (
  <Dropdown
    items={[
      { label: '1', value: 1 },
      { label: '2', value: 2 },
    ]}
    labelText="Dropdown"
    handleSelectItem={(item) => console.log(item)}
  ></Dropdown>
)

export const TextFieldStory = () => (
  <TextField label="Логин" variant="outlined"></TextField>
)

export const ErrorFieldStory = () => (
  <TextField
    label="Логин"
    error
    helperText="Введите логин"
    variant="outlined"
  ></TextField>
)

export const PasswordStory = () => (
  <PasswordField label="Пароль"></PasswordField>
)

export const DatePickerStory = () => <DatePicker />

export const TableStory = () => (
  <div style={{ margin: '20px' }}>
    <Table />
  </div>
)

export const ToastStory = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)} variant="contained">
        Open toast
      </Button>
      <Toast isOpen={open} message="click on me" />
    </>
  )
}

export const BreadcrumbsStory = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', height: '100vh' }}>
      <Breadcrumbs />
    </div>
  )
}

// Карточка собирается целиком из компонентов MaterialUI
export const CardStory = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', height: '100vh' }}>
      <Card>
        <CardHeader
          title="Заголовок карточки"
          subheader="Тест"
          action={<img src={StockImage} />}
        ></CardHeader>
        {/* <CardMedia image={StockImage} /> */}
      </Card>
    </div>
  )
}

export const TimePickerStory = () => {
  return (
    <TimePicker
      value={new Date()}
      onAccept={(date) => {
        console.log(date)
      }}
    />
  )
}

export const DateTimePickerStory = () => {
  return (
    <DateTimePicker
      value={new Date()}
      onAccept={(date) => {
        console.log(date)
      }}
    />
  )
}

export const ModalStory = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Открыть модалку
      </Button>
      <Modal open={open}>
        <div>123</div>
      </Modal>
    </div>
  )
}

export const SidebarMenuStory = () => {
  return (
    <Router>
      <SidebarMenu
        logoSrc={Logo}
        miniLogoSrc={Logo}
        items={[
          {
            label: 'Франшиза',
            icon: <StarBorder />,
            items: [
              { linkTo: '/there', label: 'Раз сюда' },
              { linkTo: '/here', label: 'Раз туда' },
            ],
          },
          {
            label: 'Курьеры',
            icon: <StarBorder />,
            items: [
              { linkTo: '/there', label: 'Два сюда' },
              { linkTo: '/here', label: 'Два туда' },
            ],
          },
        ]}
      />
    </Router>
  )
}

// export const DateRangePickerStory = () => <DateRangePicker />;
