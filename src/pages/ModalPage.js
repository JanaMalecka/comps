import { useState } from 'react';

import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleClick = () => {
    setShowModal(true);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an importatn agreement for you to accept.</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac lacus
        tempor, varius nisl ac, bibendum magna. Praesent sollicitudin lobortis
        lorem, sit amet ultrices ex scelerisque ac. Nam sed sagittis lectus, a
        pulvinar arcu. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Aenean tincidunt libero at odio semper
        ultricies. Sed risus arcu, pretium eget lacus in, pellentesque
        consectetur nibh. Vivamus et quam ac mi egestas interdum. Curabitur et
        eros quis enim rhoncus varius in eu lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac lacus
        tempor, varius nisl ac, bibendum magna. Praesent sollicitudin lobortis
        lorem, sit amet ultrices ex scelerisque ac. Nam sed sagittis lectus, a
        pulvinar arcu. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Aenean tincidunt libero at odio semper
        ultricies. Sed risus arcu, pretium eget lacus in, pellentesque
        consectetur nibh. Vivamus et quam ac mi egestas interdum. Curabitur et
        eros quis enim rhoncus varius in eu lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac lacus
        tempor, varius nisl ac, bibendum magna. Praesent sollicitudin lobortis
        lorem, sit amet ultrices ex scelerisque ac. Nam sed sagittis lectus, a
        pulvinar arcu. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Aenean tincidunt libero at odio semper
        ultricies. Sed risus arcu, pretium eget lacus in, pellentesque
        consectetur nibh. Vivamus et quam ac mi egestas interdum. Curabitur et
        eros quis enim rhoncus varius in eu lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac lacus
        tempor, varius nisl ac, bibendum magna. Praesent sollicitudin lobortis
        lorem, sit amet ultrices ex scelerisque ac. Nam sed sagittis lectus, a
        pulvinar arcu. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Aenean tincidunt libero at odio semper
        ultricies. Sed risus arcu, pretium eget lacus in, pellentesque
        consectetur nibh. Vivamus et quam ac mi egestas interdum. Curabitur et
        eros quis enim rhoncus varius in eu lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac lacus
        tempor, varius nisl ac, bibendum magna. Praesent sollicitudin lobortis
        lorem, sit amet ultrices ex scelerisque ac. Nam sed sagittis lectus, a
        pulvinar arcu. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Aenean tincidunt libero at odio semper
        ultricies. Sed risus arcu, pretium eget lacus in, pellentesque
        consectetur nibh. Vivamus et quam ac mi egestas interdum. Curabitur et
        eros quis enim rhoncus varius in eu lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac lacus
        tempor, varius nisl ac, bibendum magna. Praesent sollicitudin lobortis
        lorem, sit amet ultrices ex scelerisque ac. Nam sed sagittis lectus, a
        pulvinar arcu. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Aenean tincidunt libero at odio semper
        ultricies. Sed risus arcu, pretium eget lacus in, pellentesque
        consectetur nibh. Vivamus et quam ac mi egestas interdum. Curabitur et
        eros quis enim rhoncus varius in eu lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac lacus
        tempor, varius nisl ac, bibendum magna. Praesent sollicitudin lobortis
        lorem, sit amet ultrices ex scelerisque ac. Nam sed sagittis lectus, a
        pulvinar arcu. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Aenean tincidunt libero at odio semper
        ultricies. Sed risus arcu, pretium eget lacus in, pellentesque
        consectetur nibh. Vivamus et quam ac mi egestas interdum. Curabitur et
        eros quis enim rhoncus varius in eu lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac lacus
        tempor, varius nisl ac, bibendum magna. Praesent sollicitudin lobortis
        lorem, sit amet ultrices ex scelerisque ac. Nam sed sagittis lectus, a
        pulvinar arcu. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Aenean tincidunt libero at odio semper
        ultricies. Sed risus arcu, pretium eget lacus in, pellentesque
        consectetur nibh. Vivamus et quam ac mi egestas interdum. Curabitur et
        eros quis enim rhoncus varius in eu lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac lacus
        tempor, varius nisl ac, bibendum magna. Praesent sollicitudin lobortis
        lorem, sit amet ultrices ex scelerisque ac. Nam sed sagittis lectus, a
        pulvinar arcu. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Aenean tincidunt libero at odio semper
        ultricies. Sed risus arcu, pretium eget lacus in, pellentesque
        consectetur nibh. Vivamus et quam ac mi egestas interdum. Curabitur et
        eros quis enim rhoncus varius in eu lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac lacus
        tempor, varius nisl ac, bibendum magna. Praesent sollicitudin lobortis
        lorem, sit amet ultrices ex scelerisque ac. Nam sed sagittis lectus, a
        pulvinar arcu. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Aenean tincidunt libero at odio semper
        ultricies. Sed risus arcu, pretium eget lacus in, pellentesque
        consectetur nibh. Vivamus et quam ac mi egestas interdum. Curabitur et
        eros quis enim rhoncus varius in eu lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac lacus
        tempor, varius nisl ac, bibendum magna. Praesent sollicitudin lobortis
        lorem, sit amet ultrices ex scelerisque ac. Nam sed sagittis lectus, a
        pulvinar arcu. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Aenean tincidunt libero at odio semper
        ultricies. Sed risus arcu, pretium eget lacus in, pellentesque
        consectetur nibh. Vivamus et quam ac mi egestas interdum. Curabitur et
        eros quis enim rhoncus varius in eu lacus.
      </p>
    </div>
  );
}

export default ModalPage;
