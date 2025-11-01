import AddFormItem from "./AddFormItem";
import Button from "./Button";
import Modal from "./Modal";

function AddItem() {
  return (
    <>
      <Modal>
        <Modal.Open opens="item-form">
          <Button className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-md">
            Add Item
          </Button>
        </Modal.Open>
        <Modal.Window name="item-form">
          <AddFormItem onCloseModal={() => {}} />
        </Modal.Window>
      </Modal>
    </>
  );
}

export default AddItem;
