import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const Profile = () => {
    const userName = 'userName';
    const petType = 'petType';
    const email = 'email@address.com';
    const today = new Date().getTime();
    const joinDate = new Date('01/01/2019').getTime();
    const days = Math.round((today - joinDate) / (1000 * 3600 * 24));
    let src = '';
    const uploadPhoto = (srcStr: string) => {
        src = srcStr;
    };

    return (
        <Card className="text-center" style={{ width: '25rem' }}>
            <Card.Header>My profile</Card.Header>
            <Card.Body>
                <Card.Title>{userName}</Card.Title>
                <form>
                    <Card.Img
                        variant="top"
                        src="../Resource/Img/default_profile.png"
                    />
                    <input
                        type="file"
                        id="profile_img"
                        name="profile_img"
                        accept="image/png, image/jpeg, image/jpg"
                    />
                </form>

                <Card.Text>Email: {email}</Card.Text>
                <Card.Text>Pet Type: {petType}</Card.Text>
                <Button
                    variant="primary"
                    type="submit"
                    onClick={() => uploadPhoto('hh')}
                >
                    Save changes
                </Button>
            </Card.Body>
            <Card.Footer className="text-muted">{days}days with Us</Card.Footer>
        </Card>
    );
};
