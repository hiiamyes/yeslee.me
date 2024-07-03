import { Button } from '@nextui-org/button';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/modal';
import GoogleIcon from '../Icon/GoogleIcon';
import AppleIcon from '../Icon/AppleIcon';
import Link from '@/src/components/Link';

const SignInButtonAndModal = ({ locale }: { locale: string }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button color="primary" size="sm" onClick={onOpen} variant="light">
        {locale === 'en' ? 'Sign in' : '註冊/登入'}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top">
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">{locale === 'en' ? 'Sign in' : '註冊/登入'}</ModalHeader>
              <ModalBody className="items-center gap-4">
                <Link className="text-xs flex gap-1 items-center p-1" href={`${process.env.NEXT_PUBLIC_API_BASE_URL}/signin`}>
                  <GoogleIcon size={16} />
                  <span>{locale === 'en' ? 'Sign in with Google' : '使用 Google 登入'}</span>
                </Link>
                <Link className="text-xs flex gap-1 items-center p-1" href={`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/apple`}>
                  <AppleIcon size={16} />
                  <span>{locale === 'en' ? 'Sign in with Apple' : '使用 Apple 登入'}</span>
                </Link>
              </ModalBody>
              <ModalFooter>
                <div></div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default SignInButtonAndModal;
