import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>I Accept</Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum ac quam sed elementum. Morbi ut lectus vel est commodo vestibulum et faucibus leo. Praesent fringilla fringilla nisi vel convallis. Mauris sed lacinia arcu. Vestibulum eget nulla ornare, efficitur tellus vitae, facilisis erat. Quisque sed mauris convallis purus congue consequat et sit amet ipsum. Nullam auctor rhoncus felis ac pellentesque. Nam a suscipit elit, in convallis velit. Maecenas eget ultrices leo, et finibus dolor. Donec blandit, urna vel iaculis congue, metus lectus varius nisi, sed dignissim augue ex in metus. Donec at elit urna. Suspendisse congue ante sed consectetur posuere. Integer tempor fermentum magna et ultricies. Nunc mattis massa vitae lorem faucibus condimentum. Pellentesque nec auctor quam.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum ac quam sed elementum. Morbi ut lectus vel est commodo vestibulum et faucibus leo. Praesent fringilla fringilla nisi vel convallis. Mauris sed lacinia arcu. Vestibulum eget nulla ornare, efficitur tellus vitae, facilisis erat. Quisque sed mauris convallis purus congue consequat et sit amet ipsum. Nullam auctor rhoncus felis ac pellentesque. Nam a suscipit elit, in convallis velit. Maecenas eget ultrices leo, et finibus dolor. Donec blandit, urna vel iaculis congue, metus lectus varius nisi, sed dignissim augue ex in metus. Donec at elit urna. Suspendisse congue ante sed consectetur posuere. Integer tempor fermentum magna et ultricies. Nunc mattis massa vitae lorem faucibus condimentum. Pellentesque nec auctor quam.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum ac quam sed elementum. Morbi ut lectus vel est commodo vestibulum et faucibus leo. Praesent fringilla fringilla nisi vel convallis. Mauris sed lacinia arcu. Vestibulum eget nulla ornare, efficitur tellus vitae, facilisis erat. Quisque sed mauris convallis purus congue consequat et sit amet ipsum. Nullam auctor rhoncus felis ac pellentesque. Nam a suscipit elit, in convallis velit. Maecenas eget ultrices leo, et finibus dolor. Donec blandit, urna vel iaculis congue, metus lectus varius nisi, sed dignissim augue ex in metus. Donec at elit urna. Suspendisse congue ante sed consectetur posuere. Integer tempor fermentum magna et ultricies. Nunc mattis massa vitae lorem faucibus condimentum. Pellentesque nec auctor quam.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum ac quam sed elementum. Morbi ut lectus vel est commodo vestibulum et faucibus leo. Praesent fringilla fringilla nisi vel convallis. Mauris sed lacinia arcu. Vestibulum eget nulla ornare, efficitur tellus vitae, facilisis erat. Quisque sed mauris convallis purus congue consequat et sit amet ipsum. Nullam auctor rhoncus felis ac pellentesque. Nam a suscipit elit, in convallis velit. Maecenas eget ultrices leo, et finibus dolor. Donec blandit, urna vel iaculis congue, metus lectus varius nisi, sed dignissim augue ex in metus. Donec at elit urna. Suspendisse congue ante sed consectetur posuere. Integer tempor fermentum magna et ultricies. Nunc mattis massa vitae lorem faucibus condimentum. Pellentesque nec auctor quam.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum ac quam sed elementum. Morbi ut lectus vel est commodo vestibulum et faucibus leo. Praesent fringilla fringilla nisi vel convallis. Mauris sed lacinia arcu. Vestibulum eget nulla ornare, efficitur tellus vitae, facilisis erat. Quisque sed mauris convallis purus congue consequat et sit amet ipsum. Nullam auctor rhoncus felis ac pellentesque. Nam a suscipit elit, in convallis velit. Maecenas eget ultrices leo, et finibus dolor. Donec blandit, urna vel iaculis congue, metus lectus varius nisi, sed dignissim augue ex in metus. Donec at elit urna. Suspendisse congue ante sed consectetur posuere. Integer tempor fermentum magna et ultricies. Nunc mattis massa vitae lorem faucibus condimentum. Pellentesque nec auctor quam.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum ac quam sed elementum. Morbi ut lectus vel est commodo vestibulum et faucibus leo. Praesent fringilla fringilla nisi vel convallis. Mauris sed lacinia arcu. Vestibulum eget nulla ornare, efficitur tellus vitae, facilisis erat. Quisque sed mauris convallis purus congue consequat et sit amet ipsum. Nullam auctor rhoncus felis ac pellentesque. Nam a suscipit elit, in convallis velit. Maecenas eget ultrices leo, et finibus dolor. Donec blandit, urna vel iaculis congue, metus lectus varius nisi, sed dignissim augue ex in metus. Donec at elit urna. Suspendisse congue ante sed consectetur posuere. Integer tempor fermentum magna et ultricies. Nunc mattis massa vitae lorem faucibus condimentum. Pellentesque nec auctor quam.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum ac quam sed elementum. Morbi ut lectus vel est commodo vestibulum et faucibus leo. Praesent fringilla fringilla nisi vel convallis. Mauris sed lacinia arcu. Vestibulum eget nulla ornare, efficitur tellus vitae, facilisis erat. Quisque sed mauris convallis purus congue consequat et sit amet ipsum. Nullam auctor rhoncus felis ac pellentesque. Nam a suscipit elit, in convallis velit. Maecenas eget ultrices leo, et finibus dolor. Donec blandit, urna vel iaculis congue, metus lectus varius nisi, sed dignissim augue ex in metus. Donec at elit urna. Suspendisse congue ante sed consectetur posuere. Integer tempor fermentum magna et ultricies. Nunc mattis massa vitae lorem faucibus condimentum. Pellentesque nec auctor quam.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum ac quam sed elementum. Morbi ut lectus vel est commodo vestibulum et faucibus leo. Praesent fringilla fringilla nisi vel convallis. Mauris sed lacinia arcu. Vestibulum eget nulla ornare, efficitur tellus vitae, facilisis erat. Quisque sed mauris convallis purus congue consequat et sit amet ipsum. Nullam auctor rhoncus felis ac pellentesque. Nam a suscipit elit, in convallis velit. Maecenas eget ultrices leo, et finibus dolor. Donec blandit, urna vel iaculis congue, metus lectus varius nisi, sed dignissim augue ex in metus. Donec at elit urna. Suspendisse congue ante sed consectetur posuere. Integer tempor fermentum magna et ultricies. Nunc mattis massa vitae lorem faucibus condimentum. Pellentesque nec auctor quam.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum ac quam sed elementum. Morbi ut lectus vel est commodo vestibulum et faucibus leo. Praesent fringilla fringilla nisi vel convallis. Mauris sed lacinia arcu. Vestibulum eget nulla ornare, efficitur tellus vitae, facilisis erat. Quisque sed mauris convallis purus congue consequat et sit amet ipsum. Nullam auctor rhoncus felis ac pellentesque. Nam a suscipit elit, in convallis velit. Maecenas eget ultrices leo, et finibus dolor. Donec blandit, urna vel iaculis congue, metus lectus varius nisi, sed dignissim augue ex in metus. Donec at elit urna. Suspendisse congue ante sed consectetur posuere. Integer tempor fermentum magna et ultricies. Nunc mattis massa vitae lorem faucibus condimentum. Pellentesque nec auctor quam.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum ac quam sed elementum. Morbi ut lectus vel est commodo vestibulum et faucibus leo. Praesent fringilla fringilla nisi vel convallis. Mauris sed lacinia arcu. Vestibulum eget nulla ornare, efficitur tellus vitae, facilisis erat. Quisque sed mauris convallis purus congue consequat et sit amet ipsum. Nullam auctor rhoncus felis ac pellentesque. Nam a suscipit elit, in convallis velit. Maecenas eget ultrices leo, et finibus dolor. Donec blandit, urna vel iaculis congue, metus lectus varius nisi, sed dignissim augue ex in metus. Donec at elit urna. Suspendisse congue ante sed consectetur posuere. Integer tempor fermentum magna et ultricies. Nunc mattis massa vitae lorem faucibus condimentum. Pellentesque nec auctor quam.
      </p>
    </div>
  );
}

export default ModalPage;
