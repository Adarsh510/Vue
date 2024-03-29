import cv2
import numpy as np
import face_recognition

def faceRecog(image_path, output_path):
    # Load known face encodings and names
    adarsh_image = face_recognition.load_image_file("Faces/Adarsh/Adarsh.jpg")
    abin_image = face_recognition.load_image_file("Faces/Abin/Abin.jpg")
    aiswarya_image = face_recognition.load_image_file("Faces/Aiswarya/Aiswarya.jpg")
    ashly_image = face_recognition.load_image_file("Faces/Ashly/Ashly.jpg")
    reshma_image = face_recognition.load_image_file("Faces/Reshma/Reshma.jpg")
    farhan_image = face_recognition.load_image_file("Faces/Farhan/Farhan.jpg")



    adarsh_face_encoding = face_recognition.face_encodings(adarsh_image)[0]
    abin_face_encoding = face_recognition.face_encodings(abin_image)[0]
    aiswarya_face_encoding = face_recognition.face_encodings(aiswarya_image)[0]
    ashly_face_encoding = face_recognition.face_encodings(ashly_image)[0]
    reshma_face_encoding = face_recognition.face_encodings(reshma_image)[0]
    farhan_face_encoding = face_recognition.face_encodings(farhan_image)[0]

    known_face_encodings = [
        adarsh_face_encoding,
        abin_face_encoding,
        aiswarya_face_encoding,
        ashly_face_encoding,
        reshma_face_encoding,
        farhan_face_encoding
    ]
    known_face_names = [
        "Adarsh",
        "Abin",
        "Aiswarya",
        "Ashly",
        "Reshma",
        "Farhan"
    ]

    # Load the image
    frame = cv2.imread(image_path)

    # Resize frame for faster processing
    small_frame = cv2.resize(frame, (0, 0), fx=0.25, fy=0.25)

    # Convert the image from BGR color to RGB color
    rgb_small_frame = small_frame[:, :, ::-1]

    # Find all the faces and face encodings in the current frame
    face_locations = face_recognition.face_locations(rgb_small_frame)
    face_encodings = face_recognition.face_encodings(rgb_small_frame, face_locations)

    face_names = []
    for face_encoding in face_encodings:
        # See if the face matches any known faces
        matches = face_recognition.compare_faces(known_face_encodings, face_encoding)
        name = "Unknown"

        # If a match is found, use the known face
        if True in matches:
            first_match_index = matches.index(True)
            name = known_face_names[first_match_index]

        face_names.append(name)

    # Display the results
    for (top, right, bottom, left), name in zip(face_locations, face_names):
        # Scale back up face locations
        top *= 4
        right *= 4
        bottom *= 4
        left *= 4

        # Draw a rectangle around the face
        cv2.rectangle(frame, (left, top), (right, bottom), (0, 0, 255), 2)

        # Draw a label with the name below the face
        cv2.rectangle(frame, (left, bottom - 35), (right, bottom), (0, 0, 255), cv2.FILLED)
        font = cv2.FONT_HERSHEY_DUPLEX
        cv2.putText(frame, name, (left + 6, bottom - 6), font, 1.0, (255, 255, 255), 1)

    # Save the output image
    cv2.imwrite(output_path, frame)

    return {"face_names": face_names}
