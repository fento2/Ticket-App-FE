import { Card, CardContent, CardHeader } from "../ui/card";

const Category = () => {
  return (
    <div>
      <Card>
        <CardHeader>Kategori Event</CardHeader>
        <CardContent>
          <div className="relative w-32 h-32 rounded-lg overflow-hidden">
            {/* Background */}
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg')`,
              }}
            >
              {/* Overlay + Text */}
              <div className="absolute inset-0 bg-black/40" />
              <p className="relative text-white font-semibold text-lg">Music</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Category;
