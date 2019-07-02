import hygen from '../../lib/hygen/bin';

export async function generate(schematic: string) {

    try {
        hygen(['dionisio', schematic]);
    } catch (error) {
        console.error(error);
    }

}
