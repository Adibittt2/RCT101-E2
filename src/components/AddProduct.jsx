import React from "react";

const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  const Button = () => <div />;
  const Modal = () => <div />;
  const ModalBody = () => <div />;
  const Input = () => <div />;
  const Select = () => <div />;
  const RadioGroup = () => <div />;
  const Radio = () => <div />;

  const [val,setVal]= useState("");
  const [cli,setCli]= useState();

  const clickFun =(()=>{

    setCli(()=>{

      return(
        setCli(val)
      )
    })

    setVal("");
  })

  const changeFun =(event)=>{

    setVal(event.target.value);
  }

  return (
    <>
      <Button my={4} data-cy="add-product-button"></Button>
      <Modal>
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" onChange = {changeFun} value={val} />
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt"></option>
            <option data-cy="add-product-category-pant"></option>
            <option data-cy="add-product-category-jeans"></option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male"></Radio>
            <Radio data-cy="add-product-gender-female"></Radio>
            <Radio data-cy="add-product-gender-unisex"></Radio>
          </RadioGroup>
          <Input data-cy="add-product-price"onChange = {changeFun} value={val} />
          <Button data-cy="add-product-submit-button" onClick ={clickFun}></Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
